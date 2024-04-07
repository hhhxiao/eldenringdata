import { ThemeConfig } from "vuepress-theme-vt";
import { defineConfig4CustomTheme } from "vuepress/config";
// const path = require("path");
import {resolve} from "path"

export default defineConfig4CustomTheme<ThemeConfig>((ctx) => ({
  theme: "vt",
  base: "/eldenringdata/",
  title: "EldenRing Document",
   configureWebpack: {
    resolve: {
      alias: {
      "@img": resolve(__dirname, '../img')
    }
    }
  },

  themeConfig: {
     enableDarkMode: true,
    repo: 'hhhxiao/eldenringdata',
    sidebar: {
      "/110/":[
        {
         title: "文本数据",
         collapsable: false,
          children:[
            ["/110/","更新日志"],
            ["/110/goods","物品"],  
            ["/110/accerrory","护符"],  
            ["/110/protector","盔甲"],  
            ["/110/gem","战技"],  
            ["/110/weapon","武器"],  
          ]
        },
      //   {
      // title: "参数文本",
      //    collapsable: false,
      //     children:[
      //       // ["/110/accerrory","武器"],
      //     ]
      //   }
      ],
    },
  },
}));
