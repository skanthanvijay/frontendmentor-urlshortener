import React, {useState} from "react";
import UrlShortener from "./UrlShortener";
import Link from "./Link";

function ShortenedLinks() {
    
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes((prevNotes) => {
            return [...prevNotes, newNote];
        });
    }

    function copyNote(id) {
        setNotes((prevNotes) => {
          prevNotes[id].copyState = "Copied!";
          prevNotes[id].bgColor = `hsl(257, 27%, 26%)`;
          return [...prevNotes];
        });
    }

    function onHover(id) {
      setNotes((prevNotes) => {
        if (prevNotes[id].bgColor !== `hsl(257, 27%, 26%)`) { prevNotes[id].bgColor = `hsl(180, 66%, 80%)`; }
        return [...prevNotes];
      });
    }

    function offHover(id) {
      setNotes((prevNotes) => {
        if (prevNotes[id].bgColor !== `hsl(257, 27%, 26%)`) { prevNotes[id].bgColor = `hsl(180, 66%, 49%)`; }
        return [...prevNotes];
      });
    }

    return (
        <div>
          <UrlShortener onAdd={addNote} />
          <div className="shortenedlinks">
            {notes.map((note, index) => (
                <Link
                key={index}
                id={index}
                url={note.url}
                shortUrl={note.shortUrl}
                copyState={note.copyState}
                bgColor={note.bgColor}
                onCopy={copyNote}
                onHover={onHover}
                offHover={offHover}
                />
            ))}
          </div>
        </div>
    );
}

export default ShortenedLinks;
