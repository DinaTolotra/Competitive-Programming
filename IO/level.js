const levelData = [
    {
        name: "level 1",
        subject: "Soit une nombre binaire donnée, determiner et afficher le nombre de '1' présent dans cette nombre.",
        exemple: ["00000000", "10000000", "00011001"],
        generate: function (min, max) {
            let count = rand(min, max);
            let result = "";

            for (let i=0; i<count; i++) 
                result += rand(0, 1);

            return result;
        },

        answer: function (input) {
            let count = 0;
            for (let i = 0; i < input.length; i++)
                if (input[i] == '1') count++;
            return count;
        }
    },
    {
        name: "level 2",
        subject: "Determiner et afficher le nombre de '0' avant chaque '1' et le nombre total de '0' dans une nombre binaire donnée. Afficher 'vide' s'il n'y a pas de '1'.",
        exemple: ["00000000", "10000000", "00011001"],
        generate: function (min, max) {
            let count = rand(min, max);
            let result = "";

            for (let i=0; i<count; i++) 
                result += rand(0, 1);
            return result;
        },

        answer: function (input) {
            let zeroCount = 0;
            let result = "";
    
            for (let i = 0; i < input.length; i++) {
                if (input[i] == '0') zeroCount++;
                else if (input[i] == '1') result += zeroCount + ' ';
            }
    
            result += zeroCount;
    
            result = result.trimEnd();
            return result? result: "vide";
        }
    },
    {
        name: "level 3",
        subject: "Maintenant, on vous donne une suite de chiffre séparer par un espace. Determiner la version binaire de ce séquence de chiffre en suivant le principe du sujet n°2.",
        exemple: ["0 0 0 0 0 0 0", "1 2 3 4", "8"],
        generate: function (min, max) {
            let count = rand(min, max);
            let result = "";
            let last = 0;

            for (let i=0; i<count; i++) {
                let nb = rand(last, max);
                result += nb;
                last = nb;
            }
            return result;
        },

        answer: function (input) {
            let binary = "";
            let zeroCount = 0;
    
            for (let i = 0; i < input.length; i++) {
                if (input[i] == ' ') continue;
    
                for (; zeroCount < parseInt(input[i]);) {
                    binary += "0";
                    zeroCount++;
                }
    
                binary += "1";
            }
    
            return binary;
        }
    },
];
