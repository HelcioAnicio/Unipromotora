import { useState } from "react";
import axios from "axios";

interface Form {
  fullName: string;
  email: string;
  cellphone: string;
  cpf: string;
  font: string;
}

export const Form = () => {
  const [dataForm, setDataForm] = useState<Form>({} as Form);
  // const [openChat, setOpenChat] = useState({
  //   channelId: 7051,
  //   message: `Olá ${dataForm.fullName}, você entrou em contato por meio do site`
  // }
  // )

  const registerLead = async (event: React.FormEvent) => {
    event.preventDefault();
    const payload = {
      name: dataForm.fullName,
      email: dataForm.email,
      phone: dataForm.cellphone,
      customFields: {
        CPF: dataForm.cpf,
      },
    };

    try {
      const response = await axios.post(
        "https://api4.kinbox.com.br/v3/contacts",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI2NDcxIiwiaXNPd25lciI6dHJ1ZSwicm9sZUlkIjpudWxsLCJ2ZXJzaW9uIjpudWxsLCJzZXNzaW9uSWQiOiIyNjQ3MS0xNzQxMzY4NDgzODcyIiwid29ya3NwYWNlSWQiOiIzNDUzIiwidmVyaWZpY2F0aW9uTGV2ZWwiOjIsImlzQWN0aXZlIjp0cnVlLCJ0eXBlIjowLCJpc01vYmlsZSI6ZmFsc2UsImlhdCI6MTc0MTM2ODQ4MywiZXhwIjoxNzcyOTA0NDgzfQ.DmizJRdlCHtL3hzMhdQ2_AZOfMXTLvw_mj3X5Pd68qQ",
          },
        },
      );
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  };

  //  try {
  //     const response = await axios.post(
  //       "https://api4.kinbox.com.br/v3/contacts",
  //       payload,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI2NDcxIiwiaXNPd25lciI6dHJ1ZSwicm9sZUlkIjpudWxsLCJ2ZXJzaW9uIjpudWxsLCJzZXNzaW9uSWQiOiIyNjQ3MS0xNzQxMzY4NDgzODcyIiwid29ya3NwYWNlSWQiOiIzNDUzIiwidmVyaWZpY2F0aW9uTGV2ZWwiOjIsImlzQWN0aXZlIjp0cnVlLCJ0eXBlIjowLCJpc01vYmlsZSI6ZmFsc2UsImlhdCI6MTc0MTM2ODQ4MywiZXhwIjoxNzcyOTA0NDgzfQ.DmizJRdlCHtL3hzMhdQ2_AZOfMXTLvw_mj3X5Pd68qQ",
  //         },
  //       },
  //     );
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Erro ao enviar os dados:", error);
  //   }

  const handleInputValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDataForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="m-auto flex w-full max-w-5xl flex-col gap-14 pb-10 md:flex-row md:gap-10 md:px-5 md:pb-20">
      <form
        className="flex w-full flex-col items-center py-10"
        id="form"
        onSubmit={registerLead}
      >
        <div className="flex w-full max-w-md flex-col items-start gap-5 rounded-2xl bg-[#03DB66] px-5 py-10 text-white">
          <div className="flex w-full flex-col">
            <label className="text-sm" htmlFor="name">
              Nome Completo
            </label>
            <input
              className="rounded-2xl bg-white px-4 py-1 text-black outline-none"
              id="name"
              type="text"
              name="fullName"
              onChange={handleInputValues}
              value={dataForm.fullName}
              placeholder="Seu nome completo"
              required
            />
          </div>
          <div className="flex w-full flex-col">
            <label className="text-sm" htmlFor="email">
              Email
            </label>
            <input
              className="rounded-2xl bg-white px-4 py-1 text-black outline-none"
              id="email"
              type="email"
              name="email"
              onChange={handleInputValues}
              value={dataForm.email}
              placeholder="email@email.com"
              required
            />
          </div>
          <div className="flex w-full flex-col">
            <label className="text-sm" htmlFor="cellphone">
              Telefone/Whatsapp
            </label>
            <input
              className="rounded-2xl bg-white px-4 py-1 text-black outline-none"
              id="cellphone"
              type="tel"
              name="cellphone"
              onChange={handleInputValues}
              value={dataForm.cellphone}
              placeholder="(XX) XXXXX-XXXX"
              required
            />
          </div>
          <div className="flex w-full flex-col">
            <label className="text-sm" htmlFor="cpf">
              CPF
            </label>
            <input
              className="rounded-2xl bg-white px-4 py-1 text-black outline-none"
              id="cpf"
              type="text"
              name="cpf"
              onChange={handleInputValues}
              value={dataForm.cpf}
              placeholder="xxx.xxx.xxx-xx"
              required
            />
          </div>
          <div className="flex w-full flex-col">
            <label className="text-sm" htmlFor="font">
              Fonte de renda
            </label>
            <input
              className="rounded-2xl bg-white px-4 py-1 text-black outline-none"
              autoComplete="on"
              id="font"
              type="number"
              name="font"
              onChange={handleInputValues}
              value={dataForm.font}
              placeholder="Valor da sua renda"
            />
          </div>
          <button
            className="cursor-pointer rounded-3xl bg-[#237745] px-8 py-2 text-white hover:bg-[#3c6b50]"
            type="submit"
            onClick={registerLead}
          >
            Quero uma proposta
          </button>
        </div>
      </form>
    </section>
  );
};
