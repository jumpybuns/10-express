const pool = require('../utils/pool');

module.exports = class Saboteur {

    id;
    name;
    meetingId;
    expertise;
    complete;
    recordingURL;

    constructor(row) {
      this.id = row.id;
      this.name = row.name;
      this.meetingId = row.meetingId;
      this.expertise = row.expertise;
      this.complete = row.complete;
      this.recordingURL = row.recording_url;

    }

    static async insert(saboteur) {
      const {
        name,
        meetingId,
        expertise,
        complete,
        recordingURL
      } = saboteur;
    
      const { rows } = await pool.query(
        ` INSERT INTO saboteurs
        (name, meetingId, expertise, complete, recording_url)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *`, 
        [name, meetingId, expertise, complete, recordingURL]
      );

      return new Saboteur(rows[0]);
    }

};
