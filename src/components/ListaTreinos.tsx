import { useState } from "react";
import CardTreino from "./CardTreino";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "./ui/select";

function ListaTreinos() {
    const [filtro, setFiltro] = useState("todos");

    const treinos = [
        {
            id: "1",
            nome: "Supino Reto",
            reps: 12,
            peso: 20,
            series: 3,
            grupo: "peito",
            img: "https://static.wixstatic.com/media/2edbed_957092a2739c4ae6823391e9d64f8608~mv2.jpg/v1/fill/w_360,h_360,al_c,q_80,enc_avif,quality_auto/2edbed_957092a2739c4ae6823391e9d64f8608~mv2.jpg"
        },
        {
            id: "2",
            nome: "Supino Inclinado",
            reps: 15,
            peso: 30,
            series: 4,
            grupo: "peito",
            img: "https://i.imgur.com/1TzqpW4.jpeg"
        },
        {
            id: "3",
            nome: "Supino Declinado",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "peito",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "4",
            nome: "Voador Frontal",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "peito",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "5",
            nome: "Crucifixo",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "peito",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "6",
            nome: "Pullovaer",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "peito",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "7",
            nome: "Crossover",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "peito",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "8",
            nome: "Crucifixo Maquina",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "peito",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "9",
            nome: "Hammer Declinado",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "peito",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "10",
            nome: "Supino Bi Articulado",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "peito",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "11",
            nome: "Hammer R.",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "peito",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "12",
            nome: "Puxada Frontal",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "costas",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "13",
            nome: "Puxada Dorsal",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "costas",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "14",
            nome: "Remada Cavalo",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "costas",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "15",
            nome: "Remada Baixa",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "costas",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "16",
            nome: "Voador Dorsal",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "costas",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "17",
            nome: "Serrote",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "costas",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "18",
            nome: "Puxada Articulada",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "costas",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "19",
            nome: "Remada Articulada",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "costas",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "20",
            nome: "Graviton",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "costas",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "21",
            nome: "Hammer Costas",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "costas",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "22",
            nome: "Tríceps Corda",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Tríceps",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "23",
            nome: "Tríceps Supinado",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Tríceps",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "24",
            nome: "Tríceps Puxada",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Tríceps",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "25",
            nome: "Tríceps Teste",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Tríceps",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "26",
            nome: "Tríceps Francês",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Tríceps",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "27",
            nome: "Tríceps Coice",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Tríceps",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "28",
            nome: "Tríceps Mergulho",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Tríceps",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "29",
            nome: "Tríceps Máquina",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Tríceps",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "30",
            nome: "Desenvolvimento",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Ombro/Trapézio",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "31",
            nome: "Ele. Frontal",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Ombro/Trapézio",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "32",
            nome: "Ele. Lateral",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Ombro/Trapézio",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "33",
            nome: "Encolhimento",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Ombro/Trapézio",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "34",
            nome: "Remada Alta",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Ombro/Trapézio",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "35",
            nome: "Crucifixo Inverso",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Ombro/Trapézio",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "36",
            nome: "Elevação Lateral",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Ombro/Trapézio",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "37",
            nome: "Rosca Scott",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Bíceps",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "38",
            nome: "Rosca Direta",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Bíceps",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "39",
            nome: "Rosca Concentrada",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Bíceps",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "40",
            nome: "Rosca Alternada",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Bíceps",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "41",
            nome: "Rosca Cross",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Bíceps",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "42",
            nome: "Rosca Scott Bi Art",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Bíceps",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "43",
            nome: "Rosca Maquina",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Bíceps",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "44",
            nome: "Rosca Martelo",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Bíceps",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "45",
            nome: "Extensora",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Perna",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "46",
            nome: "Leg 45°",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Perna",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "47",
            nome: "Leg Horizontal",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Perna",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "48",
            nome: "Flexora Sentada",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Perna",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "49",
            nome: "Cadeira Abdutora",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Perna",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "50",
            nome: "Agachamento",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Perna",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "51",
            nome: "Hack",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Perna",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "52",
            nome: "Hack Articulado",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Perna",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "53",
            nome: "Glúteo 4 Apoios",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Perna",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "54",
            nome: "Apolete",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Perna",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "55",
            nome: "Stiff",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Perna",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "56",
            nome: "Flexão Plantar",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Perna",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "57",
            nome: "Leg 45° Bi Articulado",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Perna",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "58",
            nome: "Elevaçao Pelvica",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Perna",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "59",
            nome: "4 Apois Bi Articulado",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Perna",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "60",
            nome: "Hack Bi Articulado",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Perna",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "62",
            nome: "Agachamento Linear",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Perna",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "63",
            nome: "Panturrilha Sentada",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Perna",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "64",
            nome: "Flexora Horizontal",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Perna",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "65",
            nome: "Leg 180°",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Perna",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "66",
            nome: "Agachamento Sumô",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Perna",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "67",
            nome: "Glúteo no Cross",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Perna",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "68",
            nome: "Panturrilha em Pé",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Perna",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        },
        {
            id: "69",
            nome: "Flexão em Pé",
            reps: 10,
            peso: 40,
            series: 4,
            grupo: "Perna",
            img: "https://i.imgur.com/cJ8Z0Jv.jpeg"
        }
        
    ];

    const treinosFiltrados =
        filtro === "todos"
            ? treinos
            : treinos.filter((t) => t.grupo === filtro);

    return (
        <div className="flex flex-col gap-6 items-center mt-6">

            {/* SELECT DE FILTRO */}
            <div>
                <Select onValueChange={(val) => setFiltro(val)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Filtrar por grupo" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="todos">Todos</SelectItem>
                        <SelectItem value="peito">Peito</SelectItem>
                        <SelectItem value="costas">Costas</SelectItem>
                        <SelectItem value="perna">Perna</SelectItem>
                        <SelectItem value="ombro">Ombro</SelectItem>
                        <SelectItem value="biceps">Bíceps</SelectItem>
                        <SelectItem value="triceps">Tríceps</SelectItem>
                        <SelectItem value="abdomen">Abdômen</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* LISTA DE TREINOS */}
            <div className="flex flex-col gap-4 items-center">
                {treinosFiltrados.map((t) => (
                    <CardTreino
                        key={t.id}
                        id={t.id}
                        nome={t.nome}
                        reps={t.reps}
                        peso={t.peso}
                        series={t.series}
                        grupo={t.grupo}
                        img={t.img}
                    />
                ))}
            </div>

        </div>
    );
}

export default ListaTreinos;
