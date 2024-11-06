import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import JSConfetti from 'js-confetti';
import _ from 'lodash';
import "../css/OpdagPage.css";

import MapIcon from '@mui/icons-material/Map';
import PlaceIcon from '@mui/icons-material/Place';

import self from "../assets/people/self/pexels-jonaorle-5673896.jpg";

import bilal1 from "../assets/people/bilal/pexels-mwabonje-1510509.jpg";
import bilal2 from "../assets/people/bilal/pexels-mwabonje-1510529.jpg";
import bilal3 from "../assets/people/bilal/pexels-marik-mcghee-1039101656-26957314.jpg";

import ali1 from "../assets/people/ali/pexels-ali-akash-3515575-5253668.jpg";
import ali2 from "../assets/people/ali/pexels-ali-akash-3515575-5253669.jpg";

import bruno1 from "../assets/people/bruno/pexels-brunogobofoto-5424801.jpg";
import bruno2 from "../assets/people/bruno/pexels-brunogobofoto-5424800.jpg";
import bruno3 from "../assets/people/bruno/pexels-brunogobofoto-5424795.jpg";

const randomSmatchValue = () => {
    const value = _.shuffle([false, false, false, true]);
    return value[0];
}

const offsetProfiles = (profiles, offset) => {
    const changedProfiles = profiles.map(x => ({ ...x, smatch: randomSmatchValue() }));
    return [...changedProfiles.slice(offset), ...changedProfiles.slice(0, offset)];
};

const confettiKill = new JSConfetti();
const confettiMarry = new JSConfetti();
const confettiSmash = new JSConfetti();
const confettiOptions = {
    confettiNumber: 30,
    emojiSize: 40,
}

const bilal = {
    id: 1,
    name: 'Abu Bilal',
    city: 'Aarhus N',
    distance: 1.4,
    age: 28,
    images: [bilal1, bilal2, bilal3],
    smatch: randomSmatchValue()
};
const bruno = {
    id: 2,
    name: 'Bruno',
    city: 'Viby',
    distance: 10.8,
    age: 24,
    images: [bruno1, bruno2, bruno3],
    smatch: randomSmatchValue()
};
const ali = {
    id: 3,
    name: 'Ali',
    city: 'Aarhus C',
    distance: 0.2,
    age: 26,
    images: [ali1, ali2],
    smatch: randomSmatchValue()
};

const ImageIndicator = ({ index, count }) => {
    const indicators = new Array(count).fill(0);
    return <div className="group-row opdag-imageIndicatorWrapper">
        {indicators.map((x, i) => {
            return <div key={i} className={`opdag-imageIndicator${i === index ? ' opdag-imageIndicatorHighlight' : ''}`}></div>;
        })}
    </div>;
}

export const OpdagPage = () => {
    const navigate = useNavigate();
    const [profiles, setProfiles] = useState(_.shuffle([bilal, bruno, ali]));
    const [imageIndex, setImageIndex] = useState(0);
    const [lastSmatchDecision, setLastSmatchDecision] = useState({ id: -1, name: profiles[0].name, value: 'kill', emoji: '🔪' });

    const smatchStingerRef = useRef(null);
    const smatchStingerBgRef = useRef(null);
    const smatchStingerResultRef = useRef(null);
    const smatchStingerMutualRef = useRef(null);
    const smatchStingerMutualPictureRef = useRef(null);

    const handleSeekImagesRight = () => {
        if (!profiles[0].images.length || profiles[0].images.length === 1) return;
        // procent tegnet hedder "remainder" og er med til at finde restværdien efter en division
        // meget godt til vores app da det gøre det muligt at gentage billeder på hvert profil ligemeget hvor mange billeder der er
        // læs mere: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
        setImageIndex(prev => (prev + 1) % profiles[0].images.length);
    }

    const handleSeekImagesLeft = () => {
        if (!profiles[0].images.length || profiles[0].images.length === 1) return;
        setImageIndex(prev => {
            const remainder = (prev - 1) % profiles[0].images.length;
            return remainder < 0 ? profiles[0].images.length + remainder : remainder;
        });
    }

    const handleSmatchMarryKill = (mutual) => {
        smatchStingerMutualRef?.current.style.setProperty('display', mutual ? 'flex' : 'none');
        smatchStingerResultRef?.current.style.setProperty('display', mutual ? 'none' : 'flex');
        
        if (mutual) smatchStingerMutualPictureRef?.current.style.setProperty('background-image', `url('${profiles[0].images[imageIndex]}')`);
        smatchStingerBgRef?.current.style.setProperty('background-image', `url('${profiles[0].images[imageIndex]}')`);
        smatchStingerBgRef?.current.style.setProperty('filter', mutual ? 'brightness(0.2) grayscale(1)' : 'brightness(1) grayscale(0)');
        smatchStingerBgRef?.current.style.setProperty('animation-name', mutual ?
            'opdag-gallery-smatch-stinger-mutual-background-show' :
            'opdag-gallery-smatch-stinger-background-show'
        );
        smatchStingerRef?.current.style.setProperty('opacity', mutual ? '1' : '0');
        smatchStingerRef?.current.style.setProperty('animation-name', mutual ?
            'opdag-gallery-smatch-stinger-mutual-show' :
            'opdag-gallery-smatch-stinger-show'
        );
        smatchStingerRef?.current.style.setProperty('display', 'flex');

        if (!mutual) {
            setTimeout(() => smatchStingerRef?.current.style.setProperty('display', 'none'), 1400);
        }
    }

    const handleKill = () => {
        setLastSmatchDecision(prev => ({
            ...prev,
            id: profiles[0].id,
            name: profiles[0].name,
            value: 'kill',
            emoji: '😥'
        }));
        handleSmatchMarryKill(false);
        confettiKill.addConfetti({
            ...confettiOptions,
            emojis: ['🔪', '🔪', '🔪', '💀', '😭']
        });
        setTimeout(() => setProfiles(prev => offsetProfiles(prev, 1)), 1000);
    }

    const handleMarry = () => {
        setLastSmatchDecision(prev => ({
            ...prev,
            id: profiles[0].id,
            name: profiles[0].name,
            value: 'marry',
            emoji: '🥰'
        }));
        handleSmatchMarryKill(profiles[0].smatch);
        confettiMarry.addConfetti({
            ...confettiOptions,
            emojis: ['💍', '💍', '💍', '💎', '🥰', '🤭']
        });
        setTimeout(() => setProfiles(prev => offsetProfiles(prev, 1)), 1000);
    }

    const handleSmash = () => {
        setLastSmatchDecision(prev => ({
            ...prev,
            id: profiles[0].id,
            name: profiles[0].name,
            value: 'smash',
            emoji: '😍'
        }));
        handleSmatchMarryKill(profiles[0].smatch);
        confettiSmash.addConfetti({
            ...confettiOptions,
            emojis: ['😘', '😘', '😘', '🤪', '😈', '🥵', '💦']
        });
        setTimeout(() => setProfiles(prev => offsetProfiles(prev, 1)), 1000);
    }

    const handleGoToChat = () => {
        navigate(`/smatches#${lastSmatchDecision.id}`);
    }

    const handleContinue = () => {
        smatchStingerRef?.current.style.setProperty('animation-duration', '0.5s');
        smatchStingerRef?.current.style.setProperty('animation-name', 'opdag-gallery-smatch-stinger-mutual-hide');
        setTimeout(() => {
            smatchStingerRef?.current.style.setProperty('opacity', '0');
            smatchStingerRef?.current.style.setProperty('display', 'none');
            smatchStingerRef?.current.style.setProperty('animation-duration', '1.5s');
        }, 400);
    }

    return <div className="group-column sections">
        <section className="group-column opdag-gallery">
            <ImageIndicator index={imageIndex} count={profiles[0].images.length} />
            <div className="opdag-gallery-background">
                <div className="opdag-gallery-background-seekLeft" onClick={handleSeekImagesLeft}></div>
                <div className="opdag-gallery-background-seekRight" onClick={handleSeekImagesRight}></div>
                {profiles[0].images.map((src, i) => {
                    return <div key={i} style={{
                        opacity: imageIndex === i ? '1' : 0,
                        backgroundImage: `url('${src || 'image_placeholder.png'}')`
                    }}></div>;
                })}
            </div>
            <div className="group-column opdag-gallery-bottom">
                <div className="group-column opdag-gallery-info">
                    <span className="group-row opdag-gallery-info-text"><MapIcon /> {profiles[0].distance} km</span>
                    <span className="group-row opdag-gallery-info-text"><PlaceIcon /> {profiles[0].city}</span>
                    <span className="opdag-gallery-info-name">{profiles[0].name}, {profiles[0].age}</span>
                </div>
                <div className="group-row opdag-gallery-buttons">
                    <button onClick={handleKill}>Kill 🔪</button>
                    <button onClick={handleMarry}>Marry 💍</button>
                    <button onClick={handleSmash}>Smash 😘</button>
                </div>
            </div>
            <div ref={smatchStingerRef} className="group-column opdag-gallery-smatch-stinger">
                <div ref={smatchStingerBgRef} className="opdag-gallery-smatch-stinger-background"></div>
                <div ref={smatchStingerResultRef} className="group-column opdag-gallery-smatch-stinger-text">
                    <span>You <strong>{lastSmatchDecision.value.includes('marry') ? 'marri' : lastSmatchDecision.value}ed</strong></span>
                    <span>{lastSmatchDecision.name} {lastSmatchDecision.emoji}</span>
                </div>
                <div ref={smatchStingerMutualRef} className="group-column opdag-gallery-smatch-stinger-mutual">
                    <div className="group-row opdag-gallery-smatch-stinger-mutual-profiles">
                        <div ref={smatchStingerMutualPictureRef}></div>
                        <div style={{ backgroundImage: `url('${self}')` }}></div>
                    </div>
                    <div className="group-column opdag-gallery-smatch-stinger-text">
                        <span>New smatch!</span>
                        <p>You have smatched with {lastSmatchDecision.name} {lastSmatchDecision.emoji}</p>
                    </div>
                    <div className="group-row opdag-gallery-smatch-stinger-mutual-action">
                        <div className="group-row opdag-gallery-buttons opdag-gallery-smatch-stinger-mutual-action-buttons">
                            <button onClick={handleGoToChat}>Go to chat</button>
                            <button onClick={handleContinue}>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>;
}