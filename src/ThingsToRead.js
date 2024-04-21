import React, { useState, useEffect } from 'react';
import {focusOnThingsToReadLink } from './NavBar';
import './ThingsToRead.css';

function ThingsToRead() {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const links = [
        { label: 'House Of CB', url: 'https://app.houseofcb.com/' },
        { label: 'Youtube', url: 'https://www.youtube.com/' },
        { label: 'Sephora', url: 'https://www.sephora.com/' },
        { label: 'Amazon', url: 'https://www.amazon.com/' },
        { label: 'Netflix', url: 'https://www.netflix.com/browse' },
        { label: 'Hulu', url: 'https://www.hulu.com/welcome' },
        { label: 'Google', url: 'https://www.google.com/' },
        { label: 'Spotify', url: 'https://open.spotify.com/' },
        { label: 'Instagram', url: 'https://www.instagram.com/' },
        { label: 'TikTok', url: 'https://www.tiktok.com/en/' }
    ];

    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case "ArrowUp":
                    if (selectedIndex === 0) {
                        const thingsToReadButton = document.querySelector('[to="/things-to-read"]');
                        if (thingsToReadButton) {
                            thingsToReadButton.focus();
                            break;
                        }
                    }

                    setSelectedIndex(prevIndex => Math.max(prevIndex - 1, 0));
                    break;
                
                case "ArrowDown":
                    setSelectedIndex(prevIndex => Math.min(prevIndex + 1, links.length - 1));
                    break;
                
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [links.length]);

    useEffect(() => {
        const selectedLink = document.querySelector(`ul > li:nth-child(${selectedIndex + 1}) > a`);
        if (selectedLink) {
            selectedLink.focus();
        }
    }, [selectedIndex]);

    const handleLinkClick = (index) => {
        setSelectedIndex(index);
    };

    return (
        <div className="ThingsToReadContainer">
            <div className="TitleContainer">
                <h1 className="ThingsToReadTitle">Things To Read</h1>
            </div>
            <div className="ListContainer"> 
                <ul className="ThingsToReadList">
                    {links.map((link, index) => (
                        <li className="ThingsToReadList" key={index}>
                            <a href={link.url} className={index === selectedIndex ? 'selected' : ''} onClick={() => handleLinkClick(index)}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ThingsToRead;