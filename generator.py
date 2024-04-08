import os, json

SCRIPT = """
<script>
export default {data() {return {};}}
</script>
"""
CSS = """
<style>
.pa {
  display: grid;
  grid-template-columns: 13% 25% 28% 31%;
  justify-content: space-between;
  border: 1px solid #e6ddbd;
  width: 100%;
  height: 100%;
  padding: 5px;
}
.i{
    justify-content: center; /* 水平居中 */
    position: relative;
}

.im{
    padding: 4px;
   position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%; 
  max-height: 100%;
}
.t{
    padding: 5px;
};
</style>
"""

VERSION = "110"
OUTPUT_ROOT = os.path.join("docs", ".vuepress", "components")


def build_block(data):
    name = (
        data.get("name", "")
        .replace(">", "&gt;")
        .replace("<", "&lt;")
        .replace("\n", "<br>")
    )
    caption = (
        data.get("caption", "")
        .replace(">", "&gt;")
        .replace("<", "&lt;")
        .replace("\n", "<br>")
    )
    info = (
        data.get("info", "")
        .replace(">", "&gt;")
        .replace("<", "&lt;")
        .replace("\n", "<br>")
    )
    effect = (
        data.get("effect", "")
        .replace(">", "&gt;")
        .replace("<", "&lt;")
        .replace("\n", "<br>")
    )
    res = "<p>{}</p>".format(name)
    if len(caption) > 0:
        res += "<br>" + caption
    if len(info) > 0:
        res += "<br>" + info
    if len(effect) > 0:
        res += "<br>" + info
    return res


used_icons = set()


def block_item(name, icon_id, zhocn_name: str):
    if name == "gem" or name == "art":
        black_list = [
            "厚重",
            "锋利",
            "优质",
            "火焰",
            "焰术",
            "雷电",
            "神圣",
            "魔力",
            "寒冷",
            "毒",
            "血",
            "神秘",
        ]
        for i in black_list:
            if zhocn_name.startswith(i):
                return True
        return False
    if icon_id in used_icons:
        return True
    else:
        used_icons.add(icon_id)
        return False

    pass


def export_accerrory(name):
    used_icons.clear()
    input = "db/{}.json".format(name)
    output = os.path.join(OUTPUT_ROOT, "{}{}.vue".format(name, VERSION))
    data = {}
    with open(input, "r", encoding="utf8") as f:
        data = json.load(f)
    template = ""
    for k, v in data.items():
        img_path = os.path.join("docs", "img", v["icon_id"] + ".png")
        html = ""
        if not os.path.exists(img_path):
            html = '<div class="pa"><div class="i"></div>'
        else:
            html = '<div class="pa"><div class="i"><img class="im" src="~@img/{}.png"></div>'.format(
                v["icon_id"]
            )
        zhocn = '<div class="t">{}</div>'.format(build_block(v["zhocn"]))
        jpnjp = '<div class="t">{}</div>'.format(build_block(v["jpnjp"]))
        engus = '<div class="t">{}</div>'.format(build_block(v["engus"]))
        html += zhocn + jpnjp + engus + "</div>\n"
        if block_item(name, v["icon_id"], v["zhocn"]["name"]):
            continue

        template += html

    template = "<template><div>" + template + "</div></template>"
    data = SCRIPT + "\n" + template + "\n" + CSS

    with open(output, "w", encoding="utf8") as f:
        f.write(data)
        f.close()
    md_file = os.path.join("docs", VERSION, name + ".md")
    with open(md_file, "w", encoding="utf8") as f:
        f.write("<ClientOnly><{}/></ClientOnly>".format(name + VERSION))
        f.close()


def build_talk_block(t):
    res = []
    for i in t:
        res.append(i.replace(">", "&gt;").replace("<", "&lt;").replace("\n", "<br>"))
    return "<br>".join(res)


def export_talk_demo():
    input = "db/talk.json"
    output = os.path.join(OUTPUT_ROOT, "talk{}.vue".format(VERSION))
    data = {}
    with open(input, "r", encoding="utf8") as f:
        data = json.load(f)
    template = ""
    for k, v in data.items():
        html = '<div class="pa"><div class="i"></div>'
        zhocn = '<div class="t">{}</div>'.format(build_talk_block(v["zhocn"]))
        jpnjp = '<div class="t">{}</div>'.format(build_talk_block(v["jpnjp"]))
        engus = '<div class="t">{}</div>'.format(build_talk_block(v["engus"]))
        html += zhocn + jpnjp + engus + "</div>\n"
        template += html

    template = "<template><div>" + template + "</div></template>"
    data = SCRIPT + "\n" + template + "\n" + CSS

    with open(output, "w", encoding="utf8") as f:
        f.write(data)
        f.close()
    md_file = os.path.join("docs", VERSION, "talk.md")
    with open(md_file, "w", encoding="utf8") as f:
        f.write("<ClientOnly><{}/></ClientOnly>".format("talk" + VERSION))
        f.close()


export_accerrory("accerrory")
export_accerrory("art")
export_accerrory("goods")
export_accerrory("protector")
export_accerrory("weapon")
export_talk_demo()
