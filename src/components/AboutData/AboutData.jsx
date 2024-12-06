import React from 'react';

const AboutData = ({ people, box_heading, a1, a2, a3, a4 }) => {
    return (
        <section className="mx-auto w-full mt-6 max-w-7xl px-4 py-4">
            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                <div>
                    <h2 className="text-lg font-semibold">{box_heading}</h2>
                </div>
            </div>
            <div className="mt-6 flex flex-col">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">
                                            {a1}
                                        </th>
                                        <th scope="col" className="px-12 py-3.5 text-left text-sm font-normal text-gray-700">
                                            {a2}
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">
                                            {a3}
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">
                                            {a4}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {people.map((person) => (
                                        <tr key={person.name}>
                                            <td className="whitespace-nowrap px-4 py-4">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 flex-shrink-0">
                                                        <img
                                                            className="h-10 w-10 rounded-full object-cover"
                                                            src={person.image}
                                                            alt={person.name}
                                                        />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{person.name}</div>
                                                        <div className="text-sm text-gray-700">{person.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-12 py-4">
                                                <div className="text-sm text-gray-900">{person.title}</div>
                                                <div className="text-sm text-gray-700">{person.department}</div>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4">
                                                <span className="inline-flex rounded-full px-2 text-xs font-semibold leading-5" style={{ color: person.color, backgroundColor: person.colorBG }}>
                                                    {person.status}
                                                </span>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                                {person.role}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutData;
