import { useForm } from "react-hook-form";
import postdata from "../helpers/post";
import { useState } from "react";



function FormsData({setUpdate}) {
    const [error, setError] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();

    const formSubmitHandler = async (data) => {
        try {
            await postdata({ ...data, likes: 0 });
            setUpdate(12)
        } catch (error) {
            setError(error.message)
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(formSubmitHandler)} noValidate>
                <div >
                    <label htmlFor="userName">User Name:</label>
                    <input className="p-2 border-solid border-2 border-indigo-600"
                        type="text"
                        id="userName"
                        {...register("userName", {
                            required: "User Name is required",
                        })}
                    />
                    <div className="error">{errors.userName?.message}</div>
                </div>

                <div className="">
                    <label htmlFor="email">User Email:</label>
                    <input className="p-2 border-solid border-2 border-indigo-600"
                        type="text"
                        id="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Ivalid email adress format",
                            },
                            validate: {
                                notAdmin: (fieldValue) => {
                                    return (
                                        fieldValue !== "admin@gmail.com" ||
                                        "Enter different email address"
                                    );
                                },
                                notBlackListed: (fieldValue) => {
                                    return (
                                        !fieldValue.endsWith("bademail.com") ||
                                        "This email is not valid"
                                    );
                                },
                            },
                        })}
                    />

                    <div className="error">{errors.email?.message}</div>
                </div>

                <div className="">
                    <label htmlFor="channel">Favourite channel:</label>
                    <input className="p-2 border-solid border-2 border-indigo-600"
                     type="text" id="channel" {...register("channel")} />
                </div>

                <input className="p-2 border-solid border-2 border-indigo-600" type="submit" value="Submit" />
            </form>

            {error && <p className="text-red-700">{error}</p>}
        </>
    )


}

export default FormsData;