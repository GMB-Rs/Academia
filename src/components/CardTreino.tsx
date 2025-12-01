import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { ChevronDown, ChevronUp, Pencil, Check } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface CardTreinoProps {
  id: string;
  nome: string;
  reps: number;
  peso: number;
  series: number;
  grupo: string;
  img: string;
}

function CardTreino({
  id,
  nome,
  reps,
  peso,
  series,
  grupo,
  img,
}: CardTreinoProps) {
  const [open, setOpen] = useState(false);
  const [editando, setEditando] = useState(false);
  const [checked, setChecked] = useState(false);

  const [data, setData] = useState({
    nome,
    reps,
    peso,
    series,
    grupo,
  });

  // Carregar dados
  useEffect(() => {
    const salvo = localStorage.getItem(`treino_${id}`);
    const checkSalvo = localStorage.getItem(`treino_checked_${id}`);

    if (salvo) setData(JSON.parse(salvo));
    if (checkSalvo) setChecked(JSON.parse(checkSalvo));
  }, [id]);

  // Salvar edição
  const salvar = () => {
    localStorage.setItem(`treino_${id}`, JSON.stringify(data));
    setEditando(false);
  };

  // Salvar checkbox
  const toggleCheck = () => {
    const novoValor = !checked;
    setChecked(novoValor);
    localStorage.setItem(`treino_checked_${id}`, JSON.stringify(novoValor));
  };

  return (
    <div className="w-full">
      <Card
        className={`w-full rounded-sm p-2 transition-all border-2 
        ${checked ? "border-green-500 shadow-md" : "border-transparent"}
    `}

      >
        <CardContent className="flex flex-col gap-3">
          {/* HEADER MOBILE */}
          <div
            className="flex sm:hidden justify-between items-center cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <CardTitle>{data.nome}</CardTitle>
            {open ? <ChevronUp /> : <ChevronDown />}
          </div>

          {/* CONTEÚDO */}
          <div
            className={`${
              !open ? "hidden sm:flex" : "flex"
            } justify-between items-start`}
          >
            {/* IMG + INFO */}
            <div className="flex items-center gap-3">
              <img className="w-28 rounded-md" src={img} alt="" />

              <div className="flex flex-col gap-1">
                <CardTitle className="hidden sm:block">{data.nome}</CardTitle>

                {editando ? (
                  <div className="flex flex-col gap-2">
                    <Input
                      className="border p-1 rounded"
                      value={data.reps}
                      onChange={(e) =>
                        setData({ ...data, reps: Number(e.target.value) })
                      }
                    />
                    <Input
                      className="border p-1 rounded"
                      value={data.peso}
                      onChange={(e) =>
                        setData({ ...data, peso: Number(e.target.value) })
                      }
                    />
                    <Input
                      className="border p-1 rounded"
                      value={data.series}
                      onChange={(e) =>
                        setData({ ...data, series: Number(e.target.value) })
                      }
                    />
                  </div>
                ) : (
                  <>
                    <CardDescription>Grupo: {data.grupo}</CardDescription>
                    <CardDescription>Rep: {data.reps}</CardDescription>
                    <CardDescription>Peso (kg): {data.peso}</CardDescription>
                    <CardDescription>Séries: {data.series}</CardDescription>
                  </>
                )}
              </div>
            </div>

            {/* CHECKBOX + EDITAR */}
            <div className="flex flex-col justify-between items-center gap-7">
              {!editando && (
                <Checkbox
                  className="w-10 h-9 border-green-600"
                  checked={checked}
                  onCheckedChange={toggleCheck}
                />
              )}

              {editando ? (
                <Button
                  onClick={salvar}
                  className="text-green-600 bg-transparent hover:bg-transparent font-bold"
                >
                  <Check />
                </Button>
              ) : (
                <Pencil
                  className="cursor-pointer"
                  onClick={() => setEditando(true)}
                />
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default CardTreino;
