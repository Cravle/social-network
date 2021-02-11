import s from "./ProfileInfo.module.css";
import {useForm} from "react-hook-form";
import React from 'react';


const InputBlock = ({
                        labelName, inputName = labelName, register, placeholder, type = 'text'
                    }) => {

    return (
        <div className={s.social}>
            <label className={s.label}
                   htmlFor={labelName}>{labelName}:</label>
            {type === 'checkbox' ?
                <input type={type} name={inputName}
                       ref={register}/> :
                <input type={type} name={inputName} placeholder={placeholder} ref={register}/>
            }
        </div>
    )
}

const ProfileDataForm = ({outFromEditMode, saveProfile, profile}) => {

    const {
        register,
        errors,
        handleSubmit
    } = useForm({defaultValues: {...profile}},)

    console.log(errors)

    const mySubmit = async (e) => {
        e.preventDefault();
        await onSubmit();


        handleSubmit(() => {
        });
    }

    const onSubmit = async (data) => {

        console.log(data);
        saveProfile(data, profile.userId).then(() => {
            outFromEditMode();

        })
    };
    return (

        <form name='about' className={s.descriptionEdit} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <InputBlock labelName={'Full Name'}
                            inputName={'fullName'} register={register}/>
                <InputBlock labelName={'Looking for a job'}
                            inputName={'lookingForAJob'}
                            register={register} type={'checkbox'}/>

                <InputBlock labelName={'About job'} inputName={'lookingForAJobDescription'}

                            register={register}/>


                <InputBlock labelName={'About me'}
                            inputName={'aboutMe'} register={register}/>

            </div>
            <div className={s.mySocials}>
                <h4>My socials</h4>

            </div>

            <div className={s.edit}>
                <button type={"submit"}
                        className={s.editBtn}>Save
                </button>
            </div>

            <div/>
            <div className={s.socialsInputs}>

                <InputBlock labelName={'facebook'}
                            inputName={'contacts.facebook'}
                            placeholder={'website.com'}
                            register={register}/>
                <InputBlock labelName={'github'}
                            inputName={'contacts.github'}
                            placeholder={'website.com'}
                            register={register}/>
                <InputBlock labelName={'instagram'}
                            inputName={'contacts.instagram'}
                            placeholder={'website.com'}
                            register={register}/>
                <InputBlock labelName={'twitter'}
                            inputName={'contacts.twitter'}
                            placeholder={'website.com'}
                            register={register}/>
                <InputBlock labelName={'vk'} inputName={'contacts.vk'}
                            placeholder={'website.com'}
                            register={register}/>
                <InputBlock labelName={'website'}
                            inputName={'contacts.website'}
                            placeholder={'website.com'}
                            register={register}/>
                <InputBlock labelName={'youtube'}
                            inputName={'contacts.youtube'}
                            placeholder={'website.com'}
                            register={register}/>

            </div>


        </form>
    )
}

export default ProfileDataForm;