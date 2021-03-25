import React, { useEffect } from "react";

const Departement = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      const vud_partenaire_id = "1482";
      const vud_categorie_id = "90";
      const vud_js = document.createElement("script");
      vud_js.type = "text/javascript";
      vud_js.src =
        "//www.viteundevis.com/b7e08b876d/" +
        vud_partenaire_id +
        "/" +
        vud_categorie_id +
        "/";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(vud_js, s);
    }
  }, []);

  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis quos
      placeat veritatis repellendus vel soluta ut, id, quis nihil tenetur
      impedit voluptatum libero necessitatibus distinctio quod! Sunt dolore
      labore accusamus!
      <div id="vb7e08b876dd"></div>
    </div>
  );
};

export default Departement;
