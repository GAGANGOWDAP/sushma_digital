import urllib.parse
import xml.etree.ElementTree as ET
import re

with open('src/index.css', 'r', encoding='utf-8') as f:
    css = f.read()

m = re.search(r'url\("data:image/svg\+xml,([^"]+)"\)', css)
if not m:
    print('SVG data URI NOT FOUND in index.css!')
else:
    data_uri = m.group(1)
    svg_str = urllib.parse.unquote(data_uri)
    print('SVG string length:', len(svg_str))
    print('First 150 chars of decoded SVG:')
    print(svg_str[:150])
    print('Last 150 chars of decoded SVG:')
    print(svg_str[-150:])
    try:
        root = ET.fromstring(svg_str)
        print('XML parse SUCCESS! Root tag:', root.tag)
        # Check elements
        print('Defs child tags:', [c.tag for c in root.find('{http://www.w3.org/2000/svg}defs')])
        pattern = root.find('.//{http://www.w3.org/2000/svg}pattern')
        if pattern is not None:
            g = pattern.find('{http://www.w3.org/2000/svg}g')
            polys = pattern.findall('.//{http://www.w3.org/2000/svg}polygon')
            print(f'Pattern found! Polygons count: {len(polys)}')
    except Exception as e:
        print('XML parse ERROR:', e)
