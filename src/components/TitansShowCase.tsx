import { Fragment, useState } from "react";
import type { GetTitansResponse } from "../types";

function TitansShowCase({ titans }: { titans: GetTitansResponse["results"] }) {
  const [titan, setTitan] = useState<GetTitansResponse["results"][number]>(
    titans[0]
  );

  return (
    <div className="flex font-mono text-xl justify-center gap-10">
      <div className="flex flex-col gap-5 items-end w-[25rem]">
        {titans.map((t, ind) => (
          <button
            key={t.name}
            className={`hover:text-pink-500 transition-all ${
              t.name === titan.name ? "text-pink-500" : ""
            }`}
            onClick={() => setTitan(titans[ind])}
          >
            {t.name}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-3 w-[25rem]">
        <p className="font-bold uppercase">
          abilities:
          <br />
          <span className="flex flex-col gap-1 text-lg font-normal lowercase text-gray-500">
            {titan.abilities.map((ability) => (
              <Fragment key={ability}>
                <span key={ability}>{ability}</span>
              </Fragment>
            ))}
          </span>
        </p>
        <p className="font-bold uppercase">
          height:
          <br />
          <span className="text-gray-500 text-lg font-normal lowercase">
            {titan.height}
          </span>
        </p>
        <p className="font-bold uppercase">
          allegiance:
          <br />
          <span className="text-gray-500 text-lg font-normal">
            {titan.allegiance}
          </span>
        </p>
      </div>
    </div>
  );
}

export default TitansShowCase;
