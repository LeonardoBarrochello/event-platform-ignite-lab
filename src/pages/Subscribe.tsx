import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Loading } from "../components/Loading";
import Logo from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";


interface FormProps {
    name: string;
    email: string;
}

export function Subscribe() {

    const [form, setForm] = useState<FormProps>({
        name: "",
        email: ""
    })

    const navigate = useNavigate();

    const [createSubscriber, { loading }] = useCreateSubscriberMutation();

    function handleSubscribe(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        createSubscriber({
            variables: {
                name: form.name,
                email: form.email
            }
        }).then(() => {
            toast.success("Inscrição realizada com sucesso 🚀");
            navigate("/event")
        }).catch((err) => {
            toast.error(`Erro : ${err.message}`)
        });
    }

    function handleFormInputs(event: React.ChangeEvent<HTMLInputElement>) {
        var target = event.target;
        var value = target.value;
        var name = target.name;
        setForm({
            ...form,
            [name]: value
        })
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>
                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
                    <form onSubmit={event => handleSubscribe(event)} className="flex flex-col gap-2 w-full">
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text"
                            name="name"
                            value={form.name}
                            placeholder="Seu nome completo"
                            onChange={(e) => handleFormInputs(e)}
                        />
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="email"
                            name="email"
                            value={form.email}
                            placeholder="Digite seu email"
                            onChange={(e) => handleFormInputs(e)}
                        />
                        <button
                            disabled={loading}
                            type="submit"
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors flex justify-center items-center disabled:opacity-50"
                        >
                            Garantir minha vaga

                        </button>
                    </form>
                </div>
            </div>
            <img src="/src/assets/code-image.png" alt="" className="mt-10" />
        </div>
    )
}