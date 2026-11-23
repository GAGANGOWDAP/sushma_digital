import urllib.parse
from collections import Counter

# 69 polygons with exact coordinates from reference
polygons_coords = [
    "90 150 0 300 180 300",      # 0
    "90 150 180 0 0 0",          # 1
    "270 150 360 0 180 0",        # 2
    "450 150 360 300 540 300",    # 3
    "450 150 540 0 360 0",        # 4
    "630 150 540 300 720 300",    # 5
    "630 150 720 0 540 0",        # 6
    "810 150 720 300 900 300",    # 7
    "810 150 900 0 720 0",        # 8
    "990 150 900 300 1080 300",   # 9
    "990 150 1080 0 900 0",       # 10
    "90 450 0 600 180 600",       # 11
    "90 450 180 300 0 300",       # 12
    "270 450 180 600 360 600",    # 13
    "270 450 360 300 180 300",    # 14
    "450 450 360 600 540 600",    # 15
    "450 450 540 300 360 300",    # 16
    "630 450 540 600 720 600",    # 17
    "630 450 720 300 540 300",    # 18
    "810 450 720 600 900 600",    # 19
    "810 450 900 300 720 300",    # 20
    "990 450 900 600 1080 600",   # 21
    "990 450 1080 300 900 300",   # 22
    "90 750 0 900 180 900",       # 23
    "270 750 180 900 360 900",    # 24
    "270 750 360 600 180 600",    # 25
    "450 750 540 600 360 600",    # 26
    "630 750 540 900 720 900",    # 27
    "630 750 720 600 540 600",    # 28
    "810 750 720 900 900 900",    # 29
    "810 750 900 600 720 600",    # 30
    "990 750 900 900 1080 900",   # 31
    "180 0 90 150 270 150",       # 32
    "360 0 270 150 450 150",       # 33
    "540 0 450 150 630 150",       # 34
    "900 0 810 150 990 150",       # 35
    "0 300 -90 450 90 450",       # 36
    "0 300 90 150 -90 150",       # 37
    "180 300 90 450 270 450",     # 38
    "180 300 270 150 90 150",     # 39
    "360 300 270 450 450 450",     # 40
    "360 300 450 150 270 150",     # 41
    "540 300 450 450 630 450",     # 42
    "540 300 630 150 450 150",     # 43
    "720 300 630 450 810 450",     # 44
    "720 300 810 150 630 150",     # 45
    "900 300 810 450 990 450",     # 46
    "900 300 990 150 810 150",     # 47
    "0 600 -90 750 90 750",       # 48
    "0 600 90 450 -90 450",       # 49
    "180 600 90 750 270 750",     # 50
    "180 600 270 450 90 450",     # 51
    "360 600 270 750 450 750",     # 52
    "360 600 450 450 270 450",     # 53
    "540 600 630 450 450 450",     # 54
    "720 600 630 750 810 750",     # 55
    "900 600 810 750 990 750",     # 56
    "900 600 990 450 810 450",     # 57
    "0 900 90 750 -90 750",       # 58
    "180 900 270 750 90 750",     # 59
    "360 900 450 750 270 750",     # 60
    "540 900 630 750 450 750",     # 61
    "720 900 810 750 630 750",     # 62
    "900 900 990 750 810 750",     # 63
    "1080 300 990 450 1170 450",   # 64
    "1080 300 1170 150 990 150",   # 65
    "1080 600 990 750 1170 750",   # 66
    "1080 600 1170 450 990 450",   # 67
    "1080 900 1170 750 990 750",   # 68
]

# Color assignments for all 69 polygons
# Dominant: White (#FFFFFF) & Warm Ivory (#F8F6F1)
# Secondary: Soft Grey (#EAEFF5 / #E0E7F0)
# Subtle shadows: Lattice Beige (#B9AA98)
# Occasional depth: Deep Navy (#142C45)
# Rare accents: Signature Red (#D92F26) & Electric Blue (#258FEA)

poly_defs = [
    # 0: Navy depth facet
    (0, "#142C45", "0.08", "navy"),
    # 1: Ivory
    (1, "#F8F6F1", "0.92", "ivory"),
    # 2: Beige
    (2, "#B9AA98", "0.18", "beige"),
    # 3: White
    (3, "#FFFFFF", "0.95", "white"),
    # 4: Soft Grey
    (4, "#E2E8F0", "0.80", "grey"),
    # 5: Ivory
    (5, "#F8F6F1", "0.92", "ivory"),
    # 6: White
    (6, "#FFFFFF", "0.95", "white"),
    # 7: Soft Grey
    (7, "#E2E8F0", "0.80", "grey"),
    # 8: White
    (8, "#FFFFFF", "0.95", "white"),
    # 9: White
    (9, "#FFFFFF", "0.95", "white"),
    # 10: Soft Grey
    (10, "#E2E8F0", "0.80", "grey"),
    # 11: Ivory
    (11, "#F8F6F1", "0.92", "ivory"),
    # 12: Ivory
    (12, "#F8F6F1", "0.92", "ivory"),
    # 13: Beige
    (13, "#B9AA98", "0.18", "beige"),
    # 14: Signature Red Accent (rare, tasteful)
    (14, "#D92F26", "0.07", "red"),
    # 15: White
    (15, "#FFFFFF", "0.95", "white"),
    # 16: Soft Grey
    (16, "#E2E8F0", "0.80", "grey"),
    # 17: Soft Grey
    (17, "#E2E8F0", "0.80", "grey"),
    # 18: White
    (18, "#FFFFFF", "0.95", "white"),
    # 19: Ivory
    (19, "#F8F6F1", "0.92", "ivory"),
    # 20: White
    (20, "#FFFFFF", "0.95", "white"),
    # 21: Electric Blue Accent (rare, luminous)
    (21, "#258FEA", "0.06", "blue"),
    # 22: Beige
    (22, "#B9AA98", "0.18", "beige"),
    # 23: Soft Grey
    (23, "#E2E8F0", "0.80", "grey"),
    # 24: Ivory
    (24, "#F8F6F1", "0.92", "ivory"),
    # 25: White
    (25, "#FFFFFF", "0.95", "white"),
    # 26: Ivory
    (26, "#F8F6F1", "0.92", "ivory"),
    # 27: Ivory
    (27, "#F8F6F1", "0.92", "ivory"),
    # 28: Deep Navy facet
    (28, "#142C45", "0.08", "navy"),
    # 29: Ivory
    (29, "#F8F6F1", "0.92", "ivory"),
    # 30: Soft Grey
    (30, "#E2E8F0", "0.80", "grey"),
    # 31: Soft Grey
    (31, "#E2E8F0", "0.80", "grey"),
    # 32: Soft Grey
    (32, "#E2E8F0", "0.80", "grey"),
    # 33: Electric Blue Accent
    (33, "#258FEA", "0.06", "blue"),
    # 34: White
    (34, "#FFFFFF", "0.95", "white"),
    # 35: Ivory
    (35, "#F8F6F1", "0.92", "ivory"),
    # 36: Ivory
    (36, "#F8F6F1", "0.92", "ivory"),
    # 37: White
    (37, "#FFFFFF", "0.95", "white"),
    # 38: White
    (38, "#FFFFFF", "0.95", "white"),
    # 39: Beige
    (39, "#B9AA98", "0.18", "beige"),
    # 40: Soft Grey
    (40, "#E2E8F0", "0.80", "grey"),
    # 41: White
    (41, "#FFFFFF", "0.95", "white"),
    # 42: Deep Navy facet
    (42, "#142C45", "0.08", "navy"),
    # 43: Soft Grey
    (43, "#E2E8F0", "0.80", "grey"),
    # 44: Beige
    (44, "#B9AA98", "0.18", "beige"),
    # 45: Soft Grey
    (45, "#E2E8F0", "0.80", "grey"),
    # 46: White
    (46, "#FFFFFF", "0.95", "white"),
    # 47: Soft Grey
    (47, "#E2E8F0", "0.80", "grey"),
    # 48: Ivory
    (48, "#F8F6F1", "0.92", "ivory"),
    # 49: Soft Grey
    (49, "#E2E8F0", "0.80", "grey"),
    # 50: Ivory
    (50, "#F8F6F1", "0.92", "ivory"),
    # 51: Beige
    (51, "#B9AA98", "0.18", "beige"),
    # 52: Signature Red Accent
    (52, "#D92F26", "0.07", "red"),
    # 53: Soft Grey
    (53, "#E2E8F0", "0.80", "grey"),
    # 54: Soft Grey
    (54, "#E2E8F0", "0.80", "grey"),
    # 55: Deep Navy facet
    (55, "#142C45", "0.08", "navy"),
    # 56: White
    (56, "#FFFFFF", "0.95", "white"),
    # 57: Soft Grey
    (57, "#E2E8F0", "0.80", "grey"),
    # 58: Ivory
    (58, "#F8F6F1", "0.92", "ivory"),
    # 59: Soft Grey
    (59, "#E2E8F0", "0.80", "grey"),
    # 60: White
    (60, "#FFFFFF", "0.95", "white"),
    # 61: Beige
    (61, "#B9AA98", "0.18", "beige"),
    # 62: White
    (62, "#FFFFFF", "0.95", "white"),
    # 63: Deep Navy facet
    (63, "#142C45", "0.08", "navy"),
    # 64: Ivory
    (64, "#F8F6F1", "0.92", "ivory"),
    # 65: White
    (65, "#FFFFFF", "0.95", "white"),
    # 66: Ivory
    (66, "#F8F6F1", "0.92", "ivory"),
    # 67: Soft Grey
    (67, "#E2E8F0", "0.80", "grey"),
    # 68: White
    (68, "#FFFFFF", "0.95", "white")
]

poly_tags = []
for idx, fill, opac, name in poly_defs:
    pts = polygons_coords[idx]
    poly_tags.append(f"<polygon fill='{fill}' fill-opacity='{opac}' points='{pts}'/>")

polygons_xml = "".join(poly_tags)

# IMPORTANT:
# In pure SVG, references are #a and #b.
# Colors are #F8F6F1, #FFFFFF, #B9AA98.
pure_svg = (
    "<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>"
    "<defs>"
    "<linearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%' gradientTransform='rotate(240)'>"
    "<stop offset='0' stop-color='#F8F6F1'/>"
    "<stop offset='1' stop-color='#FFFFFF'/>"
    "</linearGradient>"
    "<pattern patternUnits='userSpaceOnUse' id='b' width='540' height='450' x='0' y='0' viewBox='0 0 1080 900'>"
    f"<g stroke='#B9AA98' stroke-width='0.75' stroke-opacity='0.20' stroke-linejoin='round'>{polygons_xml}</g>"
    "</pattern>"
    "</defs>"
    "<rect x='0' y='0' fill='url(#a)' width='100%' height='100%'/>"
    "<rect x='0' y='0' fill='url(#b)' width='100%' height='100%'/>"
    "</svg>"
)

# Encode properly for CSS data URI:
# urllib.parse.quote will encode '#' as '%23', so:
# fill='url(#a)' becomes fill='url(%23a)'
# stop-color='#F8F6F1' becomes stop-color='%23F8F6F1'
# stroke='#B9AA98' becomes stroke='%23B9AA98'
# When the browser's CSS parser loads the data URI, '%23' decodes to '#' once!
encoded_data_uri = "data:image/svg+xml," + urllib.parse.quote(pure_svg)

# Verify decoding
decoded_back = urllib.parse.unquote(encoded_data_uri.replace("data:image/svg+xml,", ""))
assert "fill='url(#a)'" in decoded_back
assert "fill='url(#b)'" in decoded_back
assert "stop-color='#F8F6F1'" in decoded_back
print("Verification: browser will decode EXACTLY to:")
print(decoded_back[:220])
print("...")
print(decoded_back[-180:])

css_rule = f"""  /* Official Sushma Digital Studio Geometric SVG Pattern (Inner Page Hero Sections) */
  .hero-triangular-pattern {{
    position: relative;
    background-color: #FFFFFF;
    background-image: 
      radial-gradient(ellipse 75% 65% at 50% 50%, rgba(248, 246, 241, 0.35) 0%, rgba(248, 246, 241, 0) 100%),
      url("{encoded_data_uri}");
    background-size: auto, 540px 450px;
    background-repeat: no-repeat, repeat;
    background-position: center center, center center;
  }}

  @media (max-width: 1024px) {{
    .hero-triangular-pattern {{
      background-size: auto, 432px 360px;
    }}
  }}

  @media (max-width: 640px) {{
    .hero-triangular-pattern {{
      background-size: auto, 324px 270px;
    }}
  }}"""

with open("fixed_css_rule.css", "w", encoding="utf-8") as f:
    f.write(css_rule)

print("Saved fixed_css_rule.css successfully!")
