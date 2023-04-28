import WithPrivateRoute from '@components/WithPrivateRoute';
import Tab from '@components/Tab';
import Link from 'next/link';
import { BasicData } from '@components/BasicData';
import { PhysicalFeatures } from '@components/PhysicalFeatures';
import { Food } from '@components/Food';
import { Care } from '@components/Care';
import { Alert } from '@components/Alert';
import { Health } from '@components/Health';
import { usePetit } from '@hooks/usePetit';

export default function Petit() {
    const {
        petits,
        handleEdit,
        handleDelete,
        deletePetit,
        tabActive,
        handleTabActive,
        setTabActive,
        lengthPetits,
        basicData,
        physicalFeatures,
        food,
        care,
    } = usePetit();

    return (
        <div className="max-sm:mx-2">
            <Link
                href={'/petit/add'}
                className="max-sm:mr-1 mr-3 text-white bg-sky-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-sky-500"
            >
                Agregar Petit
            </Link>
            {lengthPetits > 0 && (
                <>
                    <button
                        onClick={handleEdit}
                        className="max-sm:mx-1 mx-3 text-white bg-amber-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-amber-500"
                    >
                        Editar Petit
                    </button>

                    <button
                        onClick={handleDelete}
                        className="max-sm:mx mx-3 text-white bg-red-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-red-500"
                    >
                        Eliminar Petit
                    </button>
                </>
            )}

            {lengthPetits > 0 && deletePetit && (
                <Alert
                    id={tabActive}
                    handleCancel={handleDelete}
                    setTabActive={setTabActive}
                />
            )}

            {lengthPetits > 0 ? (
                <div className="my-3">
                    <ul className="mb-5 flex list-none flex-col flex-wrap border-b-0 pl-0 md:flex-row">
                        {petits.map((tab, index) => (
                            <Tab
                                key={tab.basicData.name}
                                id={index}
                                handleTabActive={handleTabActive}
                                name={tab.basicData.name}
                                tabActive={tabActive}
                            />
                        ))}
                    </ul>

                    <section>
                        <Health tabActive={tabActive} />
                    </section>

                    <section className={'mb-6'}>
                        <BasicData basicData={basicData} disabled={true} />

                        <PhysicalFeatures
                            physicalFeatures={physicalFeatures}
                            disabled={true}
                        />

                        <Food food={food} disabled={true} />

                        <Care care={care} disabled={true} />
                    </section>
                </div>
            ) : (
                <h1 className="text-black my-9 text-center text-2xl">
                    No hay petits registrados. Agrege un petit
                </h1>
            )}
        </div>
    );
}

Petit.Auth = WithPrivateRoute;
