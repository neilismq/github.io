(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{453:function(s,a,t){"use strict";t.r(a);var e=t(17),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"什么是homebrew"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是homebrew"}},[s._v("#")]),s._v(" 什么是Homebrew")]),s._v(" "),t("p",[s._v("直译：家酿啤酒")]),s._v(" "),t("p",[s._v("macOS自带的一种软件包管理器，由"),t("code",[s._v("Ruby")]),s._v("语言编写而成。")]),s._v(" "),t("p",[s._v("默认安装位置： "),t("code",[s._v("/usr/local/")])]),s._v(" "),t("h3",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),t("ul",[t("li",[s._v("Formulae: 公式，即软件")]),s._v(" "),t("li",[s._v("cask: 木桶，")])]),s._v(" "),t("h2",{attrs:{id:"安装和卸载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装和卸载"}},[s._v("#")]),s._v(" 安装和卸载")]),s._v(" "),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("/usr/bin/ruby -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n")])])]),t("h3",{attrs:{id:"卸载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载"}},[s._v("#")]),s._v(" 卸载")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("ruby -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n")])])]),t("h2",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),t("h3",{attrs:{id:"信息查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#信息查询"}},[s._v("#")]),s._v(" 信息查询")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看版本")]),s._v("\nbrew -v\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看已安装的软件")]),s._v("\nbrew list\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 浏览器打开 Homebrew 官网")]),s._v("\nbrew home\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看包的详细信息")]),s._v("\nbrew info 包名\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看包的版本")]),s._v("\nbrew list --versions "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" 包名\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以树形展示所有已安装包的依赖")]),s._v("\nbrew deps --installed --tree\n\n")])])]),t("h3",{attrs:{id:"查找软件包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查找软件包"}},[s._v("#")]),s._v(" 查找软件包")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("brew search "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 支持正则")]),s._v("\nbrew search /^git$/\n\n")])])]),t("h3",{attrs:{id:"安装软件包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装软件包"}},[s._v("#")]),s._v(" 安装软件包")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" 包名@版本\n")])])]),t("h3",{attrs:{id:"卸载软件包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载软件包"}},[s._v("#")]),s._v(" 卸载软件包")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("brew uninstall 包名\n")])])]),t("h3",{attrs:{id:"更新自身"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新自身"}},[s._v("#")]),s._v(" 更新自身")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("brew update\n")])])]),t("h3",{attrs:{id:"更新包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新包"}},[s._v("#")]),s._v(" 更新包")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看哪些包有新版本")]),s._v("\nbrew outdated\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新所有包")]),s._v("\nbrew upgrade\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新指定包")]),s._v("\nbrew upgrade 包名\n")])])]),t("h3",{attrs:{id:"清理旧的升级包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#清理旧的升级包"}},[s._v("#")]),s._v(" 清理旧的升级包")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("如果一个包当前有可更新的版本没有更新，执行清理时候只会提示一个警告，而不会执行清理操作。需要先升级到最新版本，再执行清理。")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  查看会删除哪些软件（只是模拟删除，并不会真正的删除）")]),s._v("\nbrew cleanup -n \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清理所有")]),s._v("\nbrew cleanup \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清理指定包")]),s._v("\nbrew cleanup 包名\n")])])]),t("h3",{attrs:{id:"锁定不想更新的包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#锁定不想更新的包"}},[s._v("#")]),s._v(" 锁定不想更新的包")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 锁定")]),s._v("\nbrew pin 包名\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解锁")]),s._v("\nbrew unpin 包名\n\n")])])]),t("h3",{attrs:{id:"关联包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关联包"}},[s._v("#")]),s._v(" 关联包")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清理无效的关联，且清理与之相关的位于/Applications和~/Applications中的无用App链接")]),s._v("\nbrew prune\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将指定软件的安装文件symlink到Homebrew上")]),s._v("\nbrew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" 包名\n\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);