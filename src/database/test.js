const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  //inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-27.222633",
    lng: "-49.6555874",
    name: " dos meninos",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "999888776",
    images: [
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=723&q=80",

      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80",

      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",

      "https://images.unsplash.com/photo-1533222481259-ce20eda1e20b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",

      "https://images.unsplash.com/photo-1521220609214-a8552380c7a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1506&q=80",

      "https://images.unsplash.com/photo-1600880291298-8481039492bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 18h até 8h",
    open_on_weekends: "0",
  });

  //consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  // consultar somente 1 orphanato pelo ID
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"');
  console.log(orphanage);

  // //deletar dados da tabela
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
});
