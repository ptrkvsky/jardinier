import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
}
const headingAccentStyles = {
  color: "#33994a",
}
const paragraphStyles = {
  marginBottom: 48,
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Page d'attente du site jardinier-paysagiste.org</title>
      <h1 style={headingStyles}>
        Page d'attente du site jardinier-paysagiste.org
        <br />
        <span style={headingAccentStyles}>— Soyez patient !</span>
        <span role="img" aria-label="Horloge attente">
          ⏱️
        </span>
      </h1>
      <p style={paragraphStyles}>
        Votre nouveau site pour trouver des élagueurs dans votre région arrive bientôt.
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
    </main>
  )
}

export default IndexPage
