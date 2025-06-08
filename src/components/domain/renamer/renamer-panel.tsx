import { createSignal } from "solid-js";

export function RenamerPanel() {
  const [startNumber, setStartNumber] = createSignal(1);
  const [digits, setDigits] = createSignal(1);
  const [increment, setIncrement] = createSignal(1);
  const [prefix, setPrefix] = createSignal("");
  const [suffix, setSuffix] = createSignal("");
  const [showTextBefore, setShowTextBefore] = createSignal(false);
  const [showTextAfter, setShowTextAfter] = createSignal(false);
  const [textBefore, setTextBefore] = createSignal("");
  const [textAfter, setTextAfter] = createSignal("");
  const [preserveExtension, setPreserveExtension] = createSignal(true);

  return (
    <div class="bg-gray-800 text-white p-4 w-[400px]">
      <div class="mb-4">
        <h2 class="text-lg font-bold mb-2">連番を含んだアイテム名を新たに付与します</h2>
      </div>

      <div class="mb-4">
        <h3 class="font-medium mb-2">連番</h3>
        <div class="flex items-center mb-2">
          <span class="w-24">開始番号</span>
          <input
            type="number"
            value={startNumber()}
            onInput={(e) => setStartNumber(Number(e.target.value))}
            class="bg-gray-700 border border-gray-600 rounded px-2 py-1 w-16 text-right"
          />
        </div>
        <div class="flex items-center mb-2">
          <span class="w-24">桁数</span>
          <input
            type="number"
            value={digits()}
            onInput={(e) => setDigits(Number(e.target.value))}
            class="bg-gray-700 border border-gray-600 rounded px-2 py-1 w-16 text-right"
          />
        </div>
        <div class="flex items-center mb-2">
          <span class="w-24">増分</span>
          <input
            type="number"
            value={increment()}
            onInput={(e) => setIncrement(Number(e.target.value))}
            class="bg-gray-700 border border-gray-600 rounded px-2 py-1 w-16 text-right"
          />
        </div>
      </div>

      <div class="mb-4">
        <div class="flex items-center mb-2">
          <span class="w-24">区切り文字の前</span>
          <input
            type="text"
            value={prefix()}
            onInput={(e) => setPrefix(e.target.value)}
            class="bg-gray-700 border border-gray-600 rounded px-2 py-1 w-32"
            placeholder="常用トン-2502"
          />
        </div>
        <div class="flex items-center mb-2">
          <span class="w-24">区切り文字の後</span>
          <input
            type="text"
            value={suffix()}
            onInput={(e) => setSuffix(e.target.value)}
            class="bg-gray-700 border border-gray-600 rounded px-2 py-1 w-32"
            placeholder="ここに文字列を入力"
          />
        </div>
      </div>

      <div class="mb-4">
        <div class="flex items-center mb-2">
          <label class="flex items-center">
            <input
              type="checkbox"
              checked={showTextBefore()}
              onChange={() => setShowTextBefore(!showTextBefore())}
              class="mr-2"
            />
            <span>区切り文字を追加</span>
          </label>
        </div>
      </div>

      <div class="mb-4">
        <div class="flex items-center justify-between mb-2">
          <span>連番の前</span>
          <span class="text-gray-400">-</span>
        </div>
        {showTextBefore() && (
          <div class="mb-2">
            <input
              type="text"
              value={textBefore()}
              onInput={(e) => setTextBefore(e.target.value)}
              class="bg-gray-700 border border-gray-600 rounded px-2 py-1 w-full"
              placeholder="ここに区切り文字を入力"
            />
          </div>
        )}
        <div class="flex items-center justify-between mb-2">
          <span>連番の後</span>
          <span class="text-gray-400">-</span>
        </div>
        {showTextAfter() && (
          <div class="mb-2">
            <input
              type="text"
              value={textAfter()}
              onInput={(e) => setTextAfter(e.target.value)}
              class="bg-gray-700 border border-gray-600 rounded px-2 py-1 w-full"
              placeholder="ここに区切り文字を入力"
            />
          </div>
        )}
      </div>

      <div class="mb-4">
        <div class="flex items-center mb-2">
          <label class="flex items-center">
            <input
              type="checkbox"
              checked={preserveExtension()}
              onChange={() => setPreserveExtension(!preserveExtension())}
              class="mr-2"
            />
            <span>拡張子を保持</span>
          </label>
        </div>
      </div>
    </div>
  );
}
