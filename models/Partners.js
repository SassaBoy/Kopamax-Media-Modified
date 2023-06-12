const partnerSchema = new mongoose.Schema({
    partnerName: String,
    partnerLogo: String,
    thanksToPartner: String,
    partnerUrl: String,
    date: { type: Date, default: Date.now },
  });
  
  
  const Partners = mongoose.model('Partners', partnerSchema);