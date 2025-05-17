function Head({ titles, actions = false }) {
  return (
    <thead className="text-xs text-center text-white/80 uppercase bg-stone-700 border-b border-stone-700 whitespace-nowrap">
      <tr>
        {titles.map((cur) => (
          <th key={cur} scope="col" className="px-6 py-4">
            {cur}
          </th>
        ))}

        {actions === true && (
          <th scope="col" className="px-6 py-4">
            options
          </th>
        )}
      </tr>
    </thead>
  );
}

function Body({ data, render }) {
  if (!data || data?.length === 0)
    return (
      <tbody>
        <tr>
          <td className="text-center py-8 font-medium" colSpan={10}>
            There is no data available here now.
          </td>
        </tr>
      </tbody>
    );

  return <tbody>{data.map(render)}</tbody>;
}

function Foot({ children }) {
  return <tfoot className="border-t border-stone-700">{children}</tfoot>;
}

export default function Table({ children }) {
  return <table className="w-full text-sm text-white/80">{children}</table>;
}

Table.Head = Head;
Table.Body = Body;
Table.Foot = Foot;
