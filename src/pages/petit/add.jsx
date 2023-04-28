import { BasicData } from '@components/BasicData';
import { Care } from '@components/Care';
import { Food } from '@components/Food';
import { PhysicalFeatures } from '@components/PhysicalFeatures';
import WithPrivateRoute from '@components/WithPrivateRoute';
import { useAdd } from '@hooks/useAdd';

export default function Add({ id }) {
    const {
        handleSavePetit,
        handleBack,
        basicData,
        setBasicData,
        physicalFeatures,
        setPhysicalFeatures,
        food,
        setFood,
        care,
        setCare,
    } = useAdd(id);

    return (
        <div className="mx-2 mb-6 sm:mx-0">
            <button
                onClick={handleSavePetit}
                className="text-white bg-sky-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-sky-500"
            >
                Guardar Petit
            </button>

            <button
                onClick={handleBack}
                className="mx-3 text-white bg-amber-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-amber-500"
            >
                Ir Atras
            </button>
            <BasicData basicData={basicData} setBasicData={setBasicData} />

            <PhysicalFeatures
                physicalFeatures={physicalFeatures}
                setPhysicalFeatures={setPhysicalFeatures}
            />

            <Food food={food} setFood={setFood} />

            <Care care={care} setCare={setCare} />

            <button
                onClick={handleSavePetit}
                className="mt-4 text-white bg-sky-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-sky-500"
            >
                Guardar Petit
            </button>
            <button
                onClick={handleBack}
                className="mx-3 text-white bg-amber-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-amber-500"
            >
                Ir Atras
            </button>
        </div>
    );
}

Add.Auth = WithPrivateRoute;
