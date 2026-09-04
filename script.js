/* =========================================
   COMPOUND INTEREST CALCULATOR
========================================= */

function calculateInvestment() {

    const initial =
        Number(
            document.getElementById("initial").value
        );


    const monthly =
        Number(
            document.getElementById("monthly").value
        );


    const annualRate =
        Number(
            document.getElementById("rate").value
        );


    const years =
        Number(
            document.getElementById("years").value
        );


    const months = years * 12;


    const monthlyRate =
        annualRate / 100 / 12;


    let futureValue;


    if (monthlyRate === 0) {

        futureValue =
            initial +
            (monthly * months);

    } else {

        futureValue =
            initial *
            Math.pow(
                1 + monthlyRate,
                months
            );


        futureValue +=
            monthly *
            (
                (
                    Math.pow(
                        1 + monthlyRate,
                        months
                    ) - 1
                )
                /
                monthlyRate
            );
    }


    const result =
        document.getElementById("result");


    result.innerHTML =
        "Estimated Future Value: $" +
        futureValue.toLocaleString(
            undefined,
            {
                maximumFractionDigits: 2
            }
        );
}


/* =========================================
   STOCK SEARCH
========================================= */

function searchStock() {

    const search =
        document
            .getElementById("stockSearch")
            .value
            .toUpperCase()
            .trim();


    if (search === "AAPL") {

        alert(
            "Apple Inc. (AAPL) research is currently displayed."
        );

    }

    else if (search === "NVDA") {

        alert(
            "NVIDIA (NVDA) research would be displayed here."
        );

    }

    else if (search === "TSLA") {

        alert(
            "Tesla (TSLA) research would be displayed here."
        );

    }

    else if (search === "") {

        alert(
            "Please enter a stock symbol."
        );

    }

    else {

        alert(
            "Demo version: Try AAPL, NVDA, or TSLA."
        );
    }

}

