import "./contact.css";
import React from "react";
import { Button, Grid, Card, Inline, Text } from "@sanity/ui";
import Thesis from "../documents/kandidat.pdf";
import { DocumentIcon } from "@sanity/icons";

export function Contact() {
  return (
    <div className="contactinfo">
      <h1>Kontaktuppgifter</h1>
      <Grid columns={[2]} gap={[3]}>
        <Text style={{ textAlign: "left", fontWeight: "bold" }}>
          Mejladress:
        </Text>

        <Text style={{ textAlign: "left" }}>
          <a href="mailto:info@radiodiabetes.eu">info@radiodiabetes.eu</a>
        </Text>
        <Text style={{ textAlign: "left", fontWeight: "bold" }}>Källkod:</Text>

        <Text style={{ textAlign: "left" }}>
          <a href="http://repo.radiodiabetes.eu">GitHub</a>
        </Text>

        <Text
          style={{
            textAlign: "left",
            fontWeight: "bold",
            paddingTop: "0.5em",
          }}
        >
          Examenstext:
        </Text>

        <Button /*icon={getIsPlaying ? PauseIcon : PlayIcon}*/
          style={{
            width: "2em",
            height: "2em",
          }}
          icon={DocumentIcon}
          onClick={() => {
            window.location.href = Thesis;
          }}
        ></Button>

        <Text style={{ textAlign: "left", fontWeight: "bold" }}>
          Ansvarig utgivare:
        </Text>

        <Text style={{ textAlign: "left" }}>Karl Johannes Jondell</Text>
      </Grid>
    </div>
  );
}
