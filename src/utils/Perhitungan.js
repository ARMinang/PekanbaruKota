const GeneratePerhitungan = nilaiProyek => {
  const nilaiAfterPPN = (nilaiProyek * 100) / 110
  const nilaiRange2 =
    (nilaiAfterPPN >= 100000000) & (nilaiAfterPPN < 400000001)
      ? nilaiAfterPPN - 100000000
      : nilaiAfterPPN > 500000001
        ? 400000000
        : nilaiAfterPPN > 100000000
          ? nilaiAfterPPN - 100000000
          : 0

  const nilaiRange1 =
    nilaiAfterPPN < 100000000
      ? nilaiAfterPPN
      : nilaiAfterPPN - nilaiRange2 < 100000000
        ? nilaiAfterPPN - nilaiRange2
        : 100000000

  const nilaiRange3 =
    (nilaiAfterPPN > 500000001) & (nilaiAfterPPN < 1000000001)
      ? nilaiAfterPPN - nilaiRange2 - nilaiRange1
      : nilaiAfterPPN > 1000000001
        ? 500000000
        : 0

  const nilaiRange4 =
    (nilaiAfterPPN > 1000000001) & (nilaiAfterPPN < 5000000001)
      ? nilaiAfterPPN - nilaiRange3 - nilaiRange2 - nilaiRange1
      : nilaiAfterPPN > 5000000001
        ? 4000000000
        : 0

  const nilaiRange5 =
    nilaiAfterPPN > 5000000000
      ? nilaiAfterPPN - nilaiRange4 - nilaiRange3 - nilaiRange2 - nilaiRange1
      : 0

  return {
    nilaiRange1,
    nilaiRange2,
    nilaiRange3,
    nilaiRange4,
    nilaiRange5,
  }
}

export default GeneratePerhitungan
