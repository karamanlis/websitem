"""hero.webp'in beyaz stüdyo fonunu alfa kanalına çevirir.

Gömlek de beyaz olduğu için basit bir eşik değeri işe yaramaz; bunun yerine
"beyaza yakın" pikselleri bağlı bileşenlere ayırıp yalnızca üst/sol/sağ
kenarlara değenleri fon sayıyoruz. Kenarlarda kalan beyaz halkayı da alfa ile
ters çarpım (unpremultiply) yaparak temizliyoruz.
"""

import numpy as np
from PIL import Image
from scipy import ndimage

SRC = r"C:\Users\MOROFİS\Desktop\WEBSİTEM\public\hero-original.webp"
OUT_WEBP = r"C:\Users\MOROFİS\Desktop\WEBSİTEM\public\hero.webp"

rgb = np.asarray(Image.open(SRC).convert("RGB")).astype(np.float32)
h, w, _ = rgb.shape

# Beyazdan uzaklık (0 = saf beyaz)
dist = 255.0 - rgb.min(axis=2)

near_white = dist < 14
lbl, n = ndimage.label(near_white)

border_labels = set(lbl[0, :]) | set(lbl[:, 0]) | set(lbl[:, -1])
border_labels.discard(0)  # alt kenar bilerek dışarıda: gövde oraya değiyor

bg = np.isin(lbl, list(border_labels))

# Fonda kalan izole tek pikselleri kapat. binary_closing'in erozyon adımı
# görüntü dışını 0 sayar, yani padding olmadan fonun en dış 1 piksellik
# çerçevesini yer — bu da görselin çevresinde opak beyaz bir çizgi bırakır.
bg = ndimage.binary_closing(np.pad(bg, 1, constant_values=True),
                            structure=np.ones((3, 3)))[1:-1, 1:-1]

# Yumuşak geçiş: sert maske yerine, beyaza uzaklığı 14..34 arasında rampalayıp
# fon bölgesiyle çarpıyoruz. Saç uçlarında doğal bir yarı saydamlık veriyor.
soft = np.clip((dist - 6.0) / 26.0, 0.0, 1.0)
alpha = np.where(bg, soft, 1.0).astype(np.float32)
alpha = ndimage.gaussian_filter(alpha, sigma=0.7)

# Beyaz saçak temizliği: P = a*C + (1-a)*255  =>  C = (P - (1-a)*255) / a
a3 = alpha[..., None]
safe = np.maximum(a3, 0.02)
color = np.clip((rgb - (1.0 - a3) * 255.0) / safe, 0.0, 255.0)

out = np.dstack([color, alpha * 255.0]).astype(np.uint8)
img = Image.fromarray(out)
# Kayıplı WebP alfa kanalını bozuyor: saydam olması gereken kenar pikselleri
# alpha≈240'a çıkıp görselin çevresinde ince beyaz bir çerçeve bırakıyor.
img.save(OUT_WEBP, lossless=True, method=6)

print("opaque piksel oranı:", float((alpha > 0.99).mean()))
print("saydam piksel oranı:", float((alpha < 0.01).mean()))
