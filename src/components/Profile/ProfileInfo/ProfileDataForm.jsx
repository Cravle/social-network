import s from "./ProfileInfo.module.css";
import {useForm} from "react-hook-form";
import React from 'react';


const InputBlock = ({labelName, inputName = labelName, register, type = 'text'}) => {

    return (
        <div>
            <label className={s.label}
                   htmlFor={labelName}>{labelName}:</label>
            {type === 'checkbox' ?
                <input type={type} name={inputName}
                       ref={register}/> :
                <input type={type} name={inputName} ref={register}/>
            }
        </div>
    )
}

const ProfileDataForm = ({outFromEditMode, saveProfile, profile}) => {

    const {
        register,

        handleSubmit
    } = useForm({defaultValues: {...profile}},)

    const onSubmit = data => {
        console.log(data);
        saveProfile(data, profile.userId);
        outFromEditMode();
    };
    return (

        <form name='about' className={s.description} onSubmit={handleSubmit(onSubmit)}>

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
            <div>
                My socials :

            </div>

            <div className={s.edit}>
                <button type={"submit"}
                        className={s.editBtn}>Save
                </button>
            </div>

            <div/>
            {/*<div className={s.socialsInputs}>*/}


            {/*    <InputBlock labelName={'facebook'} inputName={['contacts']['facebook']}*/}
            {/*                register={register}/>*/}
            {/*    <InputBlock labelName={'github'} inputName={['contacts']['github']}*/}
            {/*                register={register}/>*/}
            {/*    <InputBlock labelName={'instagram'} inputName={['contacts']['github']}*/}
            {/*                register={register}/>*/}
            {/*    <InputBlock labelName={'twitter'} register={register}/>*/}
            {/*    <InputBlock labelName={'vk'} register={register}/>*/}
            {/*    <InputBlock labelName={'website'} register={register}/>*/}
            {/*    <InputBlock labelName={'youtube'} register={register}/>*/}

            {/*</div>*/}


        </form>
    )
}

export default ProfileDataForm;