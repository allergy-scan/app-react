const groups = {
  "Gluten": [
    "Gluten",
    "Amaranth",
    "Arrowroot",
    "Barley",
    "Brewers yeast",
    "Buckwheat",
    "Caramel color",
    "Citric Acid",
    "Corn",
    "Dextrin",
    "Flavors",
    "Glucose syrup",
    "Gluten",
    "Guar Gum",
    "Herbs",
    "HVP or HPP",
    "Lecithin",
    "Malt",
    "Maltodextrin",
    "Millet",
    "Modified food starch",
    "Mono and diglycerides",
    "Montina",
    "MSG",
    "Oat gum",
    "Oats",
    "Potato",
    "Quinoa",
    "Rice",
    "Rye",
    "Seasonings",
    "Seitan",
    "Soba",
    "Sorghum",
    "Soy",
    "Soy Sauce",
    "Spelt",
    "Spices",
    "Starch",
    "Sweet Potato",
    "Tapioca",
    "Teff",
    "Teriyaki sauce",
    "Tofu",
    "Triticale",
    "Vanilla",
    "Vinegar",
    "Wheat",
    "Wheat Starch",
    "Whey",
    "Xanthan gum",
    "Yeast"
  ],
  "Vegan": [
    "Adrenaline",
    "Alanine",
    "Albumen",
    "Albumin",
    "Alcloxa",
    "Aldioxa",
    "Aliphatic Alcohol",
    "Allantoin",
    "Alligator Skin",
    "Alpha-Hydroxy Acids",
    "Ambergris",
    "Amino Acids",
    "Aminosuccinate Acid",
    "Angora",
    "Animal Fats and Oils",
    "Animal Hair",
    "Arachidonic Acid",
    "Arachidyl Proprionate",
    "Aspartic Acid, Aminosuccinate Acid",
    "Bee Pollen",
    "Bee Products",
    "Beeswax, Honeycomb",
    "Benzoic Acid",
    "Beta Carotene",
    "Biotin, Vitamin H, Vitamin B Factor",
    "Blood",
    "Boar Bristles",
    "Bone Char",
    "Bone Meal",
    "Calciferol",
    "Calfskin",
    "Caprylamine Oxide",
    "Capryl Betaine",
    "Caprylic Acid",
    "Caprylic Triglyceride",
    "Carbamide",
    "Carmine. Cochineal. Carminic Acid",
    "Carminic Acid",
    "Carotene, Provitamin A, Beta Carotene",
    "Casein, Caseinate, Sodium Caseinate",
    "Caseinate",
    "Cashmere",
    "Castor, Castoreum",
    "Castoreum",
    "Catgut",
    "Cera Flava",
    "Cerebrosides",
    "Cetyl Alcohol",
    "Cetyl Palmitate",
    "Chitosan",
    "Cholesterin",
    "Cholesterol",
    "Choline Bitartrate",
    "Civet",
    "Cochineal",
    "Cod Liver Oil",
    "Collagen",
    "Colors, Dyes",
    "Corticosteroid",
    "Cortisone, Corticosteroid",
    "Cysteine, L-Form",
    "Cystine",
    "Dexpanthenol",
    "Diglycerides",
    "Dimethyl Stearamine",
    "Down",
    "Duodenum Substances",
    "Dyes",
    "Egg Protein",
    "Elastin",
    "Emu Oil",
    "Ergocalciferol",
    "Ergosterol",
    "Estradiol",
    "Estrogen, Estradiol",
    "Fats",
    "Fatty Acids",
    "FD&C Colors",
    "Feathers",
    "Fish Liver Oil",
    "Fish Oil",
    "Fish Scales",
    "Fur",
    "Gel",
    "Gelatin, Gel",
    "Glucose Tyrosinase",
    "Glycerides",
    "Glycerin, Glycerol",
    "Glycerol",
    "Glyceryls",
    "Glycreth-26",
    "Guanine, Pearl Essence",
    "Hide Glue",
    "Honey",
    "Honeycomb",
    "Horsehair",
    "Hyaluronic Acid",
    "Hydrocortisone",
    "Hydrolyzed Animal Protein",
    "Imidazolidinyl Urea",
    "Insulin",
    "Isinglass",
    "Isopropyl Lanolate",
    "Isopropyl Myristate",
    "Isopropyl Palmitate",
    "Keratin",
    "Lactic Acid",
    "Lactose",
    "Laneth",
    "Lanogene",
    "Lanolin, Lanolin Acids, Wool Fat, Wool Wax",
    "Lanolin Alcohol",
    "Lanosterols",
    "Lard",
    "Leather, Suede, Animal Skin",
    "Lecithin, Choline Bitartrate",
    "Linoleic Acid",
    "Lipase",
    "Lipids",
    "Lipoids, Lipids",
    "Marine Oil",
    "Methionine",
    "Milk Protein",
    "Mink Oil",
    "Monoglycerides, Glycerides (See Glycerin)",
    "Musk (Oil)",
    "Myristal Ether Sulfate",
    "Myristic Acid",
    "Myristyls",
    "Natural Sources",
    "Nucleic Acids",
    "Ocenol",
    "Octyl Dodecanol",
    "Oleic Acid",
    "Oils",
    "Oleths",
    "Oleyl Alcohol, Ocenol",
    "Oleyl Arachidate",
    "Oleyl Imidazoline",
    "Oleyl Myristate",
    "Oleyl Oleate",
    "Oleyl Stearate",
    "Palmitamide",
    "Palmitamine",
    "Palmitate",
    "Palmitic Acid",
    "Panthenol, Dexpanthenol, Vitamin B-Complex Factor, Provitamin B-5",
    "Panthenyl",
    "Pepsin",
    "Placenta, Placenta Polypeptides Protein, Afterbirth",
    "Polyglycerol",
    "Polypeptides",
    "Polysorbates",
    "Pristane",
    "Progesterone",
    "Propolis",
    "Provitamin A",
    "Provitamin B-5",
    "Provitamin D-2",
    "Rennet, Rennin",
    "Rennin",
    "Resinous Glaze",
    "Ribonucleic Acid",
    "RNA, Ribonucleic Acid",
    "Royal Jelly",
    "Sable Brushes",
    "Sea Turtle Oil",
    "Shark Liver Oil",
    "Sheepskin",
    "Shellac, Resinous Glaze",
    "Silk, Silk Powder",
    "Snails",
    "Sodium Caseinate",
    "Sodium Steroyl Lactylate",
    "Sodium Tallowate",
    "Spermaceti, Cetyl Palmitate, Sperm Oil",
    "Sponge (Luna and Sea)",
    "Squalane",
    "Squalene",
    "Stearamide",
    "Stearamine",
    "Stearamine Oxide",
    "Stearates",
    "Stearic Acid",
    "Stearic Hydrazide",
    "Stearone",
    "Stearoxytrimethylsilane",
    "Stearoyl Lactylic Acid",
    "Stearyl Acetate",
    "Stearyl Alcohol, Sterols",
    "Stearyl Betaine",
    "Stearyl Caprylate",
    "Stearyl Citrate",
    "Stearyldimethyl Amine",
    "Stearyl Glycyrrhetinate",
    "Stearyl Heptanoate",
    "Stearyl Imidazoline",
    "Stearyl Octanoate",
    "Stearyl Stearate",
    "Steroids, Sterols",
    "Sterols",
    "Suede",
    "Tallow, Tallow Fatty Alcohol, Stearic Acid",
    "Tallow Acid",
    "Tallow Amide",
    "Tallow Amine",
    "Talloweth-6",
    "Tallow Glycerides",
    "Tallow Imidazoline",
    "Triterpene Alcohols",
    "Turtle Oil, Sea Turtle Oil",
    "Tyrosine",
    "Urea, Carbamide",
    "Uric Acid",
    "Vitamin A",
    "Vitamin B-Complex Factor",
    "Vitamin B Factor",
    "Vitamin B-12",
    "Vitamin D, Ergocalciferol, Vitamin D-2, Ergosterol, Provitamin D-2, Calciferol, Vitamin D-3",
    "Vitamin H",
    "Wax",
    "Whey",
    "Wool",
    "Wool Fat",
    "Wool Wax"
  ],
  "Peanut": [
    "Arachic oil",
    "Arachis",
    "Arachis hypogaea",
    "Artificial nuts",
    "Beer nuts",
    "Boiled peanuts",
    "Cold pressed extruded",
    "expelled peanut oil",
    "Crushed nuts",
    "crushed peanuts",
    "Earth nuts",
    "Goober peas",
    "Ground nuts, ground peanuts",
    "Hydrolyzed peanut protein",
    "Mandelonas",
    "Mixed nuts",
    "Monkey nuts",
    "Nu nuts flavored nuts",
    "Nut pieces",
    "Nutmeat",
    "Peanuts",
    "peanut butter",
    "peanut butter chips",
    "peanut butter morsels",
    "Peanut flour",
    "Peanut paste",
    "Peanut sauce",
    "peanut syrup",
    "Spanish peanuts",
    "Virginia peanuts"
  ],
  "Nut": [
    "Almonds",
    "Anacardium nuts",
    "Argan oil",
    "Artificial nuts",
    "Beechnut",
    "Brazil nuts",
    "Butternut",
    "Calisson",
    "Cashews",
    "Chestnuts",
    "Chinquapin",
    "Filberts",
    "Ginkgo nut",
    "Gianduja and giandula",
    "Hazelnuts",
    "Hazelnut milk",
    "butter",
    "Hickory nuts",
    "Litchi",
    "lichee",
    "lychee nut",
    "Macadamia nuts",
    "Mandelonas",
    "Marzipan",
    "Nangai nuts",
    "Nougat",
    "Nut extracts",
    "Nut distillates",
    "Nut butters",
    "Nut liquors",
    "Nut meal",
    "Nut paste",
    "Nut pieces",
    "Nutella",
    "Nutmeat",
    "Pecans",
    "Pili nut",
    "Pine nuts",
    "Pistachios",
    "Queensland nut",
    "Shea nut",
    "Walnuts",
    "Walnut hull extract"
  ],
  "lactose": [
    "Butter",
    "butter fat",
    "butter oil",
    "butter acid",
    "butter ester",
    "butter esters",
    "Buttermilk",
    "Casein",
    "Casein hydrolysate",
    "Caseinates",
    "Cheese",
    "Cottage cheese",
    "Cream",
    "Curds",
    "Custard",
    "Diacetyl",
    "Ghee",
    "Half-and-half",
    "Lactalbumin",
    "lactalbumin phosphate",
    "Lactoferrin",
    "Lactose",
    "Lactulose",
    "Milk",
    "Milk protein hydrolysate",
    "Pudding",
    "Recaldent",
    "Rennet casein",
    "Sour cream",
    "sour cream solids",
    "Sour milk solids",
    "Tagatose",
    "Whey",
    "Whey protein hydrolysate",
    "Yogurt"
  ]
}
export default groups