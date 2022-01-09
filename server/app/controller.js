exports.saveCallId = async (req, res) => {
  try {
    const { id, signalData } = req.body;
    await saveCallId(id, signalData);
    res.status(200).send(true);
  } catch (ex) {
    res.send(400).send(ex.message);
  }
};

exports.getCallId = async (req, res) => {
  try {
    const { id } = req.params.id;
    const code = await getCallId(id);
    await this.saveCallId(id, signalData);
    res.status(200).send({ code });
  } catch (ex) {
    res.send(400).send(ex.message);
  }
};
