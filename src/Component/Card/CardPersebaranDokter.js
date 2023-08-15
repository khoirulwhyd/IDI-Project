import { PieChart, Pie, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

export default function CardPersebaranDokter () {
    const persebaranDokter = [
        {
            name: 'Kota Malang',
            skandungan: 4000,
            sjantung: 2400,
            smata: 2400,
            spenyakitdalam: 4000,
            amt: 2400,
        },
        {
            name: 'Kota Batu',
            skandungan: 4000,
            sjantung: 2400,
            smata: 2400,
            spenyakitdalam: 4000,
            amt: 2210,
        },
        {
            name: 'Kec. Pujon',
            skandungan: 4000,
            sjantung: 2400,
            smata: 2400,
            spenyakitdalam: 4000,
            amt: 2290,
        },
        {
            name: 'Kec. Ngantang',
            skandungan: 4000,
            sjantung: 2400,
            smata: 2400,
            spenyakitdalam: 4000,
            amt: 2000,
        },
        {
            name: 'Kec. Kepanjen',
            skandungan: 4000,
            sjantung: 2400,
            smata: 2400,
            spenyakitdalam: 4000,
            amt: 2181,
        },
        {
            name: 'Kec. Turen',
            skandungan: 4000,
            sjantung: 2400,
            sjantung: 2400,
            spenyakitdalam: 4000,
            amt: 2500,
        },
        {
            name: 'Kec. Gondanglegi',
            skandungan: 4000,
            sjantung: 2400,
            sjantung: 2400,
            spenyakitdalam: 4000,
            amt: 2100,
        },
    ];
    return(
        <>
            <div class="mx-auto w-full overflow-hidden">
                <BarChart
                    width={1024}
                    height={300}
                    data={persebaranDokter}
                    margin={{
                        top: 5,
                        right: 30,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="skandungan" fill="#8884d8" />
                    <Bar dataKey="sjantung" fill="#82ca9d" />
                    <Bar dataKey="spenyakitdalam" fill="#82ca9d" />
                    <Bar dataKey="smata" fill="#82ca9d" />
                </BarChart>
            </div>
        </>
    )
}