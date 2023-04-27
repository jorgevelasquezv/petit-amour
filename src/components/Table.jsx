import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

export const Table = ({ title, data }) => {
  const head = data.head;
  const bodies = data.bodies;
  return (
    <table className="w-full text-sm text-left text-gray-500">
      <caption>{title}</caption>
      <thead className="text-xs text-gray-700 uppercase bg-gray-100">
        <tr>
          {head.map(head => (
            <th
              key={uuidv4()}
              scope="col"
              className="px-6 py-3"
            >
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {bodies.map(body => (
          <tr
            key={uuidv4()}
            className="bg-white border-b"
          >
            {body.map(body => (
              <td
                key={uuidv4()}
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {typeof body !== "object" ? (
                  body
                ) : (
                  <Image
                    alt={"exams"}
                    src={"/assets/" + body.image.split("\\").pop()}
                    width={300}
                    height={120}
                  />
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
