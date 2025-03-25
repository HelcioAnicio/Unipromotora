import { useState } from "react";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

interface Form {
  fullName: string;
  email: string;
  cellphone: string;
  cpf: string;
  font: string;
  service: string;
}

export const Form = () => {
  const [dataForm, setDataForm] = useState<Form>({
    fullName: "",
    email: "",
    cellphone: "",
    cpf: "",
    font: "",
    service: "",
  });

  const [formItsOk, setFormItsOk] = useState("none");

  const formatCPF = (cpf: string) => {
    if (!cpf) return "";
    const cleanedCPF = cpf.replace(/\D/g, "");
    if (cleanedCPF.length !== 11) return cpf;
    return cleanedCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  };

  const registerLead = async (event: React.FormEvent) => {
    event.preventDefault();

    if (
      !dataForm.fullName ||
      !dataForm.email ||
      !dataForm.cellphone ||
      !dataForm.cpf ||
      !dataForm.font
    ) {
      setFormItsOk("error");
      setTimeout(() => {
        setFormItsOk("none");
      }, 3000);
      return;
    }

    const formattedCPF = formatCPF(dataForm.cpf);

    const payload = {
      name: dataForm.fullName,
      email: dataForm.email,
      phone: dataForm.cellphone,
      font: dataForm.font,
      customFields: {
        cpf: {
          value: formattedCPF,
        },
      },
    };

    try {
      const response = await axios.post(
        "https://webhook.kinbox.com.br/v3/inbound/ecoX5GjCZ",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer SEU_TOKEN",
          },
        },
      );

      if (response.status === 200) {
        setFormItsOk("ok");
        setTimeout(() => {
          setFormItsOk("none");
        }, 3000);
        setDataForm({
          fullName: "",
          email: "",
          cellphone: "",
          cpf: "",
          font: "",
          service: "",
        });
      } else {
        setFormItsOk("error");
        setTimeout(() => {
          setFormItsOk("none");
        }, 3000);
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  };

  const handleInputValues = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setDataForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section
      className="m-auto flex w-full max-w-5xl flex-col gap-14 pb-10 md:flex-row md:gap-10 md:px-5 md:pb-20"
      aria-labelledby="form-title"
    >
      <h1 id="form-title" className="sr-only">
        Formulário de Cadastro
      </h1>
      <form
        className="relative flex w-full flex-col items-center py-10"
        id="form"
        onSubmit={registerLead}
        aria-describedby="form-description"
      >
        <p id="form-description" className="sr-only">
          Preencha o formulário abaixo para enviar seus dados.
        </p>
        <div className="flex w-full max-w-md flex-col items-start gap-5 rounded-2xl bg-[#03DB66] px-5 py-10 text-white">
          <div className="flex w-full flex-col">
            <label className="text-sm" htmlFor="name">
              Nome Completo
            </label>
            <input
              className="rounded-2xl bg-white px-4 py-1 text-black outline-none placeholder:text-gray-400"
              id="name"
              type="text"
              name="fullName"
              onChange={handleInputValues}
              value={dataForm.fullName}
              placeholder="Seu nome completo"
              required
              aria-required="true"
            />
          </div>
          <div className="flex w-full flex-col">
            <label className="text-sm" htmlFor="cellphone">
              Telefone/Whatsapp
            </label>
            <input
              className="rounded-2xl bg-white px-4 py-1 text-black outline-none placeholder:text-gray-400"
              id="cellphone"
              type="tel"
              name="cellphone"
              onChange={handleInputValues}
              value={dataForm.cellphone}
              placeholder="(XX) XXXXX-XXXX"
              required
              aria-required="true"
            />
          </div>
          <div className="flex w-full flex-col">
            <label className="text-sm" htmlFor="cpf">
              CPF
            </label>
            <input
              className="rounded-2xl bg-white px-4 py-1 text-black outline-none placeholder:text-gray-400"
              id="cpf"
              type="text"
              name="cpf"
              onChange={handleInputValues}
              value={dataForm.cpf}
              placeholder="xxx.xxx.xxx-xx"
              required
              aria-required="true"
            />
          </div>
          <div className="flex w-full flex-col">
            <label className="text-sm" htmlFor="font">
              Fonte de renda
            </label>
            <select
              name="font"
              id="font"
              value={dataForm.font}
              onChange={handleInputValues}
              className="rounded-2xl bg-white px-4 py-1 text-gray-400 outline-none"
              aria-required="true"
            >
              <option value="" disabled>
                Selecione sua fonte de renda
              </option>
              <option value="beneficiario">Beneficiário (INSS)</option>
              <option value="aposentado ou servidor publico">
                Aposentado ou Servidor Público
              </option>
              <option value="trabalho com carteira assinada">
                Trabalho com Carteira Assinada
              </option>
              <option value="recebendo auxilio">
                Recebendo Auxílio (Bolsa família)
              </option>
              <option value="autonomo/pj">Autônomo/PJ</option>
              <option value="outra">Outra</option>
            </select>
          </div>

          <div className="flex w-full flex-col">
            <label className="text-sm" htmlFor="service">
              Serviço desejado
            </label>
            <select
              name="service"
              id="service"
              value={dataForm.service}
              onChange={handleInputValues}
              className="rounded-2xl bg-white px-4 py-1 text-gray-400 outline-none"
              aria-required="true"
            >
              <option value="" disabled>
                Selecione o serviço desejado
              </option>
              <option value="antecipação-saque-aniversário">
                Antecipação do saque aniversário
              </option>
              <option value="debito-em-conta-inss">Débito em conta INSS</option>
              <option value="empréstimo-bolsa-família">
                Empréstimo bolsa família
              </option>
              <option value="quero-conhecer-todos">Quero conhecer todos</option>
            </select>
          </div>

          <button
            className="cursor-pointer rounded-3xl bg-[#237745] px-8 py-2 text-white hover:bg-[#3c6b50]"
            type="submit"
            onClick={registerLead}
            aria-label="Enviar formulário para receber uma proposta"
          >
            Quero uma proposta
          </button>
        </div>
        {formItsOk === "ok" && (
          <div
            className="absolute top-0 left-0 z-50 flex h-full w-dvw flex-col items-center justify-center gap-5 bg-white"
            role="alert"
            aria-live="assertive"
          >
            <FaCheckCircle className="size-56 text-green-500" />
            <h2>Formulário enviado com sucesso</h2>
          </div>
        )}
        {formItsOk === "error" && (
          <div
            className="absolute top-0 left-0 z-50 flex h-full w-dvw flex-col items-center justify-center gap-5 bg-white"
            role="alert"
            aria-live="assertive"
          >
            <IoMdCloseCircle className="size-56 text-red-500" />
            <h2>Favor preencher todos os dados corretamente</h2>
          </div>
        )}
      </form>
    </section>
  );
};
