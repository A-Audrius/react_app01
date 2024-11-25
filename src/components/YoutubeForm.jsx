import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools";

function YoutubeForm() {
    const { register, control, handleSubmit, reset, watch, formState: { errors } } = useForm({
        mode: "onBlur",
        reValidateMode: "onChange"
        defaultValues: {
            username: "",
            email: "",
            channel: "",
        },
    });
    const { username, email } = watch();

    const formSubmitHandler = (data) => {
        console.log(data);
        reset();
        // setValue("username", "");
        // setValue("email", "");
    }
    return (
        <>
            <div>
                <form onSubmit={handleSubmit(formSubmitHandler)} noValidate>
                    <div>
                        <input type="text" id="username" {...register("username", { required: "this field is required" })} /> 
                    </div>

                    <div>
                        <input type="text" id="email" 
                        {...register("email", 
                            { required: " email is required", 
                                
                                pattern: {
                            value: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
                            message: "invalid email addres",
                        },

                        validate: {
                            notAdmin:(fieldValue) => {
                                return (
                                    fieldValue !== "admin@gmail.com" ||
                                    "Enter diferent email"
                                );
                            },
                        }
                            // endsWith: (fielValue) => {
                            //     return (
                            //          fieldValue !== "admin@gmail.com" ||
                            //         "Enter diferent email"
                            //     );
                            // },
                            
                        })} 
                        />

                    </div>
                     <p>{errors.username?.message}</p>

                    <div>
                        <h6>
                            Favorite Channel
                        </h6>
                        <select id="channel"{...register("channel")}  >
                            <option value="">Select a chanel</option>
                            <option value="Code with Ania Kubow">1</option>
                            <option value="Kewin T">2</option>
                            <option value="Net Ninja">3</option>
                        </select>

                    </div>
                    <div>
                        <h6>choose your favorite color</h6>
                        <label >
                            <input type="radio" name="" value="green" {...register("color", { required: "please select a color" })} />green
                        </label>
                        <label>
                            <input type="radio" name="" value="red"  {...register("color", { required: "please select a color" })} />red
                        </label>
                        <label >
                            <input type="radio" name="" value="blue" {...register("color", { required: "please select a color" })} />blue
                        </label>
                    </div>

                    <div>
                        <h6>Select your hobies:</h6>
                        <input type="checkbox" value="reading" {...register("hobies", { required: "please select at least one hobby" })} />
                        <input type="checkbox" value="traveling" {...register("hobies", { required: "please select at least one hobby" })} />
                        <input type="checkbox" value="cooking" {...register("hobies", { required: "please select at least one hobby" })} />
                    </div>
                    <div>
                        <input type="submit" value="submit" />
                    </div>
                </form>

                <DevTool control={control} />
            </div>
            <div>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </>
    );
}

export default YoutubeForm;