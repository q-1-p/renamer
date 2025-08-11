import {
  ALargeSmall,
  ArrowDown01,
  ArrowLeftRight,
  BrushCleaning,
  Calendar,
  CaseSensitive,
  Eraser,
  Languages,
  PencilLine,
  Replace,
  Type,
  Wrench,
} from "lucide-react";

interface MenuItem {
  icon: React.ReactNode;
  label: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

export const menuItems: MenuSection[] = [
  {
    title: "連番追加",
    items: [
      {
        icon: <ArrowDown01 className="h-4 w-4 text-green-400" />,
        label: "連番を含むアイテムを変更",
      },
      {
        icon: <ArrowDown01 className="h-4 w-4 text-green-400" />,
        label: "先頭に連番を追加",
      },
      {
        icon: <ArrowDown01 className="h-4 w-4 text-green-400" />,
        label: "末尾に連番を追加",
      },
      {
        icon: <ArrowDown01 className="h-4 w-4 text-green-400" />,
        label: "指定箇所に連番を挿入",
      },
    ],
  },
  {
    title: "文字列追加",
    items: [
      {
        icon: <PencilLine className="h-4 w-4 text-blue-400" />,
        label: "先頭に文字列を追加",
      },
      {
        icon: <PencilLine className="h-4 w-4 text-blue-400" />,
        label: "末尾に文字列を追加",
      },
      {
        icon: <PencilLine className="h-4 w-4 text-blue-400" />,
        label: "指定箇所に文字列を挿入",
      },
    ],
  },
  {
    title: "正規表現",
    items: [
      {
        icon: <Wrench className="h-4 w-4 text-teal-400" />,
        label: "正規表現",
      },
    ],
  },
  {
    title: "文字列変換",
    items: [
      {
        icon: <ArrowLeftRight className="h-4 w-4 text-pink-400" />,
        label: "全角英数字 ⇄ 半角英数字",
      },
      {
        icon: <ArrowLeftRight className="h-4 w-4 text-pink-400" />,
        label: "全角カタカナ ⇄ 半角カタカナ",
      },
      {
        icon: <CaseSensitive className="h-4 w-4 text-pink-400" />,
        label: "大文字 ⇄ 小文字",
      },
      {
        icon: <Type className="h-4 w-4 text-pink-400" />,
        label: "タイトルケースに変換",
      },
      {
        icon: <Languages className="h-4 w-4 text-pink-400" />,
        label: "ひらがな ⇄ カタカナ",
      },
    ],
  },
  {
    title: "文字列置換",
    items: [
      {
        icon: <ALargeSmall className="h-4 w-4 text-orange-400" />,
        label: "文字列を置換",
      },
      {
        icon: <BrushCleaning className="h-4 w-4 text-orange-400" />,
        label: "文字化けを修正",
      },
    ],
  },
  {
    title: "文字列削除",
    items: [
      {
        icon: <Eraser className="h-4 w-4 text-red-400" />,
        label: "先頭から指定文字数を削除",
      },
      {
        icon: <Eraser className="h-4 w-4 text-red-400" />,
        label: "末尾から指定文字数を削除",
      },
      {
        icon: <Eraser className="h-4 w-4 text-red-400" />,
        label: "指定箇所の文字を削除",
      },
    ],
  },
  {
    title: "メタデータ",
    items: [
      {
        icon: <Calendar className="h-4 w-4 text-purple-300" />,
        label: "日時を含むアイテムへ変更",
      },
      {
        icon: <Calendar className="h-4 w-4 text-purple-300" />,
        label: "先頭に日時を追加",
      },
      {
        icon: <Calendar className="h-4 w-4 text-purple-300" />,
        label: "末尾に日時を追加",
      },
      {
        icon: <Calendar className="h-4 w-4 text-purple-300" />,
        label: "指定箇所に日時を挿入",
      },
    ],
  },
  {
    title: "拡張子",
    items: [
      {
        icon: <CaseSensitive className="h-4 w-4 text-green-400" />,
        label: "大文字 ⇄ 小文字",
      },
      {
        icon: <Replace className="h-4 w-4 text-green-400" />,
        label: "拡張子を変更または追加",
      },
      {
        icon: <Eraser className="h-4 w-4 text-green-400" />,
        label: "拡張子を削除",
      },
    ],
  },
];
