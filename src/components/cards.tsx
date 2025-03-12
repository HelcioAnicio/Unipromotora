import { Card } from "./card";

export const Cards = () => {
  return (
    <section id="ourProducts" className="py-16">
      <h2 className="text-center text-2xl font-bold 2xl:text-3xl">
        Nossos produtos
      </h2>
      <div className="m-auto mt-32 flex h-full w-full flex-wrap items-center justify-center gap-20 md:gap-10 md:px-3">
        <Card
          img="/iconCake.png"
          alt="icon of cake"
          heading="Antecipação do saque aniversário"
          paragraph="Ideal para trabalhadores com carteira assinada, essa opção
                permite que você utilize seu saldo do FGTS para conquistar mais
                no presente."
        />
        <Card
          img="/iconWallet.png"
          alt="icon of wallet"
          heading="Débito em conta"
          paragraph="Crédito simples de até "
          span="R$ 5.000"
          secondParagraph="para beneficiários
          do INSS e servidores públicos. Parcelas descontadas diretamente
          da conta, sem necessidade de margem para a contratação."
        />

        <Card
          img="/iconHands.png"
          alt="icon of hands"
          heading="Empréstimo pelo Bolsa Família"
          paragraph="Crédito fácil, com parcelas acessíveis descontadas do benefício.
                Liberando"
          span="valores de até R$ 750, com prazos de até 12 meses"
        />
      </div>
    </section>
  );
};
