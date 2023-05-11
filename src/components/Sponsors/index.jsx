import { Button } from "../Button";
import Slider from "../Slider";

export const Sponsors = () => {
  return (
    <div className="my-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl">Patrocinadores, colaboradores e apoiadores</h2>
        <p className="py-6">
          Temos patrocinadores, colaboradores e apoiadores nos mais diversos segmentos, tanto no Âmbito público quanto
          no privado, além de outras instituições do terceiro setor.
        </p>
        <Button colorful={true}>Saiba como ajudar</Button>
      </div>

      <Slider />
    </div>
  );
};
