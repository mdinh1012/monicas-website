import React from 'react';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const homeLinkRef = useRef(null);
    const thingsToReadLinkRef = useRef(null);

    useEffect(() => {
        homeLinkRef.current.focus();
    }, [])

    const handleKeyDown = (event) => {
        switch (event.key) {
            case "ArrowLeft":
                homeLinkRef.current.focus();
                break;

            case "ArrowRight":
                thingsToReadLinkRef.current.focus();
                break;
            
            case "ArrowDown":
                thingsToReadLinkRef.current.focus();
                break;
            
            default:
                break;
        }
    };

    const focusOnThingsToReadLink = () => {
        thingsToReadLinkRef.current.focus();
    };

    return (
        <nav onKeyDown={handleKeyDown}>
            <table>
                <th><Link to="/" ref={homeLinkRef}>Home</Link></th>

                <th><Link to="/things-to-read" ref={thingsToReadLinkRef}>Things To Read</Link></th>
            </table>
        </nav>
    );
}

export default NavBar;