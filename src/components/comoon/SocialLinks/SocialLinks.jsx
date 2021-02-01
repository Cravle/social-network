import React from 'react';
import s from "./SocialLinks.module.css";
import facebook from "../../../assets/img/facebook (1).svg"
import website from "../../../assets/img/website.svg"
import vk from "../../../assets/img/vk.svg"
import twitter from "../../../assets/img/twitter.svg"
import instagram from "../../../assets/img/instagram.svg"
import youtube from "../../../assets/img/youtube.svg"
import github from "../../../assets/img/github.svg"


const SocialLinks = (props) => {
    return (
        <div className={s.socialLinks}>
            {props.profileContacts.facebook &&
            <a href={`//` + props.profileContacts.facebook} target={'_blank'} rel="noreferrer">
                <img className={s.icon} alt={'f'} src={facebook}/>
            </a>
            }

            {props.profileContacts.website &&
            <a href={`//` + props.profileContacts.website} target={'_blank'} rel="noreferrer">
                <img className={s.icon} alt={'f'} src={website}/>
            </a>
            }
            {props.profileContacts.vk &&
            <a href={`//` + props.profileContacts.vk} target={'_blank'} rel="noreferrer">
                <img className={s.icon} alt={'f'} src={vk}/>
            </a>
            }
            {props.profileContacts.twitter &&
            <a href={`//` + props.profileContacts.twitter} target={'_blank'} rel="noreferrer">
                <img className={s.icon} alt={'f'} src={twitter}/>
            </a>
            }
            {props.profileContacts.instagram &&
            <a href={`//` + props.profileContacts.instagram} target={'_blank'} rel="noreferrer">
                <img className={s.icon} alt={'f'} src={instagram}/>
            </a>
            }
            {props.profileContacts.youtube &&
            <a href={`//` + props.profileContacts.youtube} target={'_blank'} rel="noreferrer">
                <img className={s.icon} alt={'f'} src={youtube}/>
            </a>
            }
            {props.profileContacts.github &&
            <a href={`//` + props.profileContacts.github} target={'_blank'} rel="noreferrer">
                <img className={s.icon} alt={'f'} src={github}/>
            </a>
            }

        </div>
    )
}

export default SocialLinks

