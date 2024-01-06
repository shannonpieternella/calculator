/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RxyuiXkD1Xt
 */
 export default function Component() {
    return (
      <div className="max-w-4xl mx-auto my-8 p-4 bg-black-100 shadow rounded">
        <div className="mb-6 ">
          <div className="mb-6 border border-blue-500 rounded-lg p-4">

          <h2 className="text-lg font-semibold mb-2">Box 3 inkomen en belasting – 2024 (voorlopig)</h2>
          </div>
         
          <div className="grid grid-cols-3 gap-4">
            <div className="font-medium">Box 3 inkomen 2</div>
            <div className="col-span-2 font-medium text-right">€ 1.037</div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="font-medium">Box 3 belasting</div>
            <div className="col-span-2 font-medium text-right">36% x € 1.037 = € 373</div>
          </div>
        </div>
        <div className="mb-6 bg-black-200 p-4 rounded">
        <div className="mb-6 border border-blue-500 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Box 3 vermogen en grondslag</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>Box 3 vermogen</div>
            <div className="text-right">€ 100.000 + € 20.000</div>
            <div className="font-medium text-right">= € 120.000</div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-2">
            <div>Aftrekbare schulden 1</div>
            <div className="text-right">€ 10.000 - € 3.700</div>
            <div className="font-medium text-right">= € 6.300 -</div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-2">
            <div>Rendementsgrondslag</div>
            <div className="col-span-2 font-medium text-right">= € 113.700</div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-2">
            <div>Heffingsvrij vermogen</div>
            <div className="col-span-2 font-medium text-right">= € 57.000 -</div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-2">
            <div>Belast in box 3 (grondslag)</div>
            <div className="col-span-2 font-medium text-right">= € 56.700</div>
          </div>
        </div>
        <div className="bg-black-200 p-4 rounded">
        <div className="mb-6 border border-blue-500 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Box 3 rendement – berekening (spaarvariant)</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>Belast spaargeld</div>
            <div className="text-right">€ 100.000</div>
            <div className="text-right">1,03%</div>
            <div className="font-medium text-right">€ 1.030</div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-2">
            <div>Belaste beleggingen</div>
            <div className="text-right">€ 20.000</div>
            <div className="text-right">6,04%</div>
            <div className="font-medium text-right">€ 1.208</div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-2">
            <div>Aftrekbare schulden</div>
            <div className="text-right">€ -6.300</div>
            <div className="text-right">2,47%</div>
            <div className="font-medium text-right">€ -156</div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-2">
            <div className="font-medium">Totaal</div>
            <div className="col-span-2 font-medium text-right">= € 2.082</div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-2">
            <div>Vermogen (rendementsgrondslag)</div>
            <div className="col-span-2 font-medium text-right">= € 113.700 ±</div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-2">
            <div>Rendementspercentage</div>
            <div className="col-span-2 font-medium text-right">1,83%</div>
          </div>
        </div>
      </div>
    )
  }
  
  