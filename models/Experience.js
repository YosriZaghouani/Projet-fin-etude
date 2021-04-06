const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const experienceSchema = new Schema(
  {
    //type
    type: {
      title: { type: String }, //en ligne ou en personne
      location: String, //si type de l'expérience est en personne
      assemblyPoint: String, //si type de l'expérience est en personne
      zoom: String, //si type de l'expérience est en ligne
    },
    sessions: {
      type: [
        {
          paymentLimit: Date,
          reservationlimit: Date,
          restDate: Date,
          launchDate: Date,
          sessionDate: Date,
          islunched: { Boolean, default: false },
        },
      ],
    },

    //titre
    title: {
      type: String,
    },
    //activité
    activity: {
      type: String,
      trim: true,
    },
    //heure début
    startHour: {
      type: String,
    },
    //heure fin
    endHour: {
      type: String,
    },
    //langues
    language: { type: String },
    //ville
    city: { type: String },
    //Thèmes
    themes: { type: [String] },
    //difficulte
    difficulty: String,
    //description du programme
    program: {
      type: {
        generalDesc: String,
        activityDesc: String,
      },
    },
    //cibles
    target: { type: [String] },
    //phobies
    phobia: { type: [String] },
    //equipements inclus
    includedEq: {
      type: {
        food: String,
        drink: String,
        material: String,
      },
    },
    //equipements exclus
    excludedEq: {
      type: {
        food: String,
        drink: String,
        material: String,
      },
    },
    //prix
    price: {
      type: Number,
      trim: true,
    },
    isPublished: false,
    isBeingValidated: false,
    isValidated: false,
    isCreated: false,
    limitParticipants: { type: Number },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Experience", experienceSchema);
