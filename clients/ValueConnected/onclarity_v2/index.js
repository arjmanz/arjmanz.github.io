class Collection extends Array {
    sum(prop) {
        //arr.reduce((accumulator, current) => accumulator + current.x, 0);
        return this.reduce((accumulator, current) => accumulator + current[prop], 0);
    }
}
const round2dec = (val) => {
    return (Math.round(val * 100) / 100)
}
var myApp = angular.module('myApp', [])
    .controller('myCtrl', ['$scope', function ($scope) {

        $scope.Math = window.Math;
        var vm = this;

        vm.model = {
            B3: 30000,
            B9: 89.87,
            B10: 122.05,
            B11: 350,
            B12: 157.28,
            B18: 0.2,
            B19: 0.3,
            B20: 0.0,
            B26: 96.13, E26: 1, //Retorno em
            B28: 45.18,
            B29: 2.15,
            B32: 1.71, E32: .5, //Retorno em
            B79: 83.1,
            B81: 3.78,
            B82: 5.83, E82: 1,
            B83: 5.29,
            B156: 94.4, E156: 1,
            B158: 20,
            B159: .5,
            B162: 5.10, E162: .5,
            C4: 50,
            C13: 615.73,
            C14: 8067.9,
            E14: 1,
            E34: 1,
            E50: 1,
            E78: 5,
            E164: 1,
            G12: 214.84,
            I14: 50,
            I50: 50,

            O7: 0, P7: 0, R7: 0, S7: 0, U7: 0, V7: 0, X7: 0, Y7: 0, AA7: 0, AB7: 0,
            N8: 0, O8: 0, Q8: 0, T8: 0, V8: 0, W8: 0, Z8: 0,
            N9: 0, O9: 0, Q9: 0, R9: 0, T9: 0, U9: 0, W9: 0, X9: 0, Z9: 0, AA9: 0,

            get B4() { return Math.round((this.C4 / 100) * this.B3) },
            get B13() { return 5 * this.C13 },
            get B14() { return 5 * this.C14 },
            get B27() { return (this.B26 / 100) - (this.B28 / 100) },
            get B30() { return ((this.B29 / 100) - (this.B31 / 100)) },
            get B31() { return round2dec(((this.B29 / 100) * (0.047)) * 100) },
            get B33() { return Math.round(((this.B30 * 100) + this.B31 + this.B32 + (this.B27 * 100) + this.B28)) },
            get B34() { return (this.B32 / 100) * (this.B26 / 100) },
            get B35() { return (this.B32 / 100) - this.B34 },
            get B78() { return (1 - (this.B81 / 100) - (this.B82 / 100) - (this.B83 / 100)) * 100 },
            get B80() { return ((this.B78 / 100) - (this.B79 / 100)) * 100 },
            get B84() { return round2dec(((this.B83 / 100) * (51 / 100)) * 100) },
            get B85() { return (this.B83 / 100) * (26 / 100) },
            get B86() { return (this.B83 / 100) * (23 / 100) },
            get B87() { return this.B79 + this.B80 + this.B81 + this.B82 + this.B83 },
            get B157() { return round2dec(((this.B156 / 100) - (this.B158 / 100)) * 100) },
            get B160() { return ((this.B159 / 100) - (this.B161 / 100)) },
            get B161() { return round2dec(((this.B159 / 100) * (4.7 / 100)) * 100) },
            get B163() { return Math.round(this.B160 + this.B161 + this.B162 + this.B157 + this.B158) },
            get B164() { return (this.B162 / 100) * (this.B156 / 100) },
            get B165() { return (this.B162 / 100) - (this.B164) },
            get E15() { return Math.round((this.I14 / 100) * this.K7) },
            get E51() { return Math.round((this.I50 / 100) * this.L8) },

            get G14() { return Math.round(this.E14 * this.E15) },
            get H14() { return (this.I14 / 100) },
            get G15() { return Math.round(this.K7) },
            get G16() { return ((this.G14 * this.G12) + (this.L56)) },
            get G48() { return ((this.G12)) },
            get G50() { return (Math.round(this.E50 * this.E51)) },
            get H50() { return (this.I50 / 100) },
            get G52() { return ((this.G50 * this.G48) + (this.M56)) },
            get L56() { return ((this.L52 + this.L53 + this.L54)) },
            get M56() { return ((this.M52 + this.M53 + this.M54)) },
            get N56() { return ((this.N52 + this.N53 + this.N54)) },

            get B43() { return this.B4 * (this.B28 / 100) * vm.get_nicca_row(1).g }, get C43() { return this.B4 * (this.B28 / 100) * vm.get_nicca_row(1).h },
            get B44() { return this.B4 * (this.B28 / 100) * vm.get_nicca_row(2).g }, get C44() { return this.B4 * (this.B28 / 100) * vm.get_nicca_row(2).h },
            get B45() { return this.B4 * (this.B28 / 100) * vm.get_nicca_row(3).g }, get C45() { return this.B4 * (this.B28 / 100) * vm.get_nicca_row(3).h },
            get B46() { return this.B4 * (this.B28 / 100) * vm.get_nicca_row(4).g }, get C46() { return this.B4 * (this.B28 / 100) * vm.get_nicca_row(4).h },
            get B47() { return this.B4 * (this.B28 / 100) * vm.get_nicca_row(5).g }, get C47() { return this.B4 * (this.B28 / 100) * vm.get_nicca_row(5).h },
            get B48() { return this.B4 * (this.B28 / 100) * vm.get_nicca_row(6).g }, get C48() { return this.B4 * (this.B28 / 100) * vm.get_nicca_row(6).h },

            get B51() { return this.B4 * this.B27 * vm.get_nicca_row(1).e }, get C51() { return this.B4 * this.B27 * vm.get_nicca_row(1).f },
            get B52() { return this.B4 * this.B27 * vm.get_nicca_row(2).e }, get C52() { return this.B4 * this.B27 * vm.get_nicca_row(2).f },
            get B53() { return this.B4 * this.B27 * vm.get_nicca_row(3).e }, get C53() { return this.B4 * this.B27 * vm.get_nicca_row(3).f },
            get B54() { return this.B4 * this.B27 * vm.get_nicca_row(4).e }, get C54() { return this.B4 * this.B27 * vm.get_nicca_row(4).f },
            get B55() { return this.B4 * this.B27 * vm.get_nicca_row(5).e }, get C55() { return this.B4 * this.B27 * vm.get_nicca_row(5).f },
            get B56() { return this.B4 * this.B27 * vm.get_nicca_row(6).e }, get C56() { return this.B4 * this.B27 * vm.get_nicca_row(6).f },

            get B59() { return this.B4 * (this.B32 / 100) * vm.get_nicca_row(1).k }, get C59() { return this.B4 * (this.B32 / 100) * vm.get_nicca_row(1).l },
            get B60() { return this.B4 * (this.B32 / 100) * vm.get_nicca_row(2).k }, get C60() { return this.B4 * (this.B32 / 100) * vm.get_nicca_row(2).l },
            get B61() { return this.B4 * (this.B32 / 100) * vm.get_nicca_row(3).k }, get C61() { return this.B4 * (this.B32 / 100) * vm.get_nicca_row(3).l },
            get B62() { return this.B4 * (this.B32 / 100) * vm.get_nicca_row(4).k }, get C62() { return this.B4 * (this.B32 / 100) * vm.get_nicca_row(4).l },
            get B63() { return this.B4 * (this.B32 / 100) * vm.get_nicca_row(5).k }, get C63() { return this.B4 * (this.B32 / 100) * vm.get_nicca_row(5).l },
            get B64() { return this.B4 * (this.B32 / 100) * vm.get_nicca_row(6).k }, get C64() { return this.B4 * (this.B32 / 100) * vm.get_nicca_row(6).l },

            get B67() { return this.B4 * (this.B29 / 100) * vm.get_nicca_row(1).m }, get C67() { return this.B4 * (this.B29 / 100) * vm.get_nicca_row(1).n },
            get B68() { return this.B4 * (this.B29 / 100) * vm.get_nicca_row(2).m }, get C68() { return this.B4 * (this.B29 / 100) * vm.get_nicca_row(2).n },
            get B69() { return this.B4 * (this.B29 / 100) * vm.get_nicca_row(3).m }, get C69() { return this.B4 * (this.B29 / 100) * vm.get_nicca_row(3).n },
            get B70() { return this.B4 * (this.B29 / 100) * vm.get_nicca_row(4).m }, get C70() { return this.B4 * (this.B29 / 100) * vm.get_nicca_row(4).n },
            get B71() { return this.B4 * (this.B29 / 100) * vm.get_nicca_row(5).m }, get C71() { return this.B4 * (this.B29 / 100) * vm.get_nicca_row(5).n },
            get B72() { return this.B4 * (this.B29 / 100) * vm.get_nicca_row(6).m }, get C72() { return this.B4 * (this.B29 / 100) * vm.get_nicca_row(6).n },

            get B97() { return this.B4 * ((this.B80 / 100)) * vm.get_nicca_row(1).i }, get C97() { return this.B4 * ((this.B80 / 100)) * vm.get_nicca_row(1).j },
            get B98() { return this.B4 * ((this.B80 / 100)) * vm.get_nicca_row(2).i }, get C98() { return this.B4 * ((this.B80 / 100)) * vm.get_nicca_row(2).j },
            get B99() { return this.B4 * ((this.B80 / 100)) * vm.get_nicca_row(3).i }, get C99() { return this.B4 * ((this.B80 / 100)) * vm.get_nicca_row(3).j },
            get B100() { return this.B4 * ((this.B80 / 100)) * vm.get_nicca_row(4).i }, get C100() { return this.B4 * ((this.B80 / 100)) * vm.get_nicca_row(4).j },
            get B101() { return this.B4 * ((this.B80 / 100)) * vm.get_nicca_row(5).i }, get C101() { return this.B4 * ((this.B80 / 100)) * vm.get_nicca_row(5).j },
            get B102() { return this.B4 * ((this.B80 / 100)) * vm.get_nicca_row(6).i }, get C102() { return this.B4 * ((this.B80 / 100)) * vm.get_nicca_row(6).j },

            get B105() { return this.B4 * (this.B79 / 100) * vm.get_nicca_row(1).e }, get C105() { return this.B4 * (this.B79 / 100) * vm.get_nicca_row(1).f },
            get B106() { return this.B4 * (this.B79 / 100) * vm.get_nicca_row(2).e }, get C106() { return this.B4 * (this.B79 / 100) * vm.get_nicca_row(2).f },
            get B107() { return this.B4 * (this.B79 / 100) * vm.get_nicca_row(3).e }, get C107() { return this.B4 * (this.B79 / 100) * vm.get_nicca_row(3).f },
            get B108() { return this.B4 * (this.B79 / 100) * vm.get_nicca_row(4).e }, get C108() { return this.B4 * (this.B79 / 100) * vm.get_nicca_row(4).f },
            get B109() { return this.B4 * (this.B79 / 100) * vm.get_nicca_row(5).e }, get C109() { return this.B4 * (this.B79 / 100) * vm.get_nicca_row(5).f },
            get B110() { return this.B4 * (this.B79 / 100) * vm.get_nicca_row(6).e }, get C110() { return this.B4 * (this.B79 / 100) * vm.get_nicca_row(6).f },

            get B113() { return this.B4 * (this.B81 / 100) * vm.get_nicca_row(1).q }, get C113() { return this.B4 * (this.B81 / 100) * vm.get_nicca_row(1).r },
            get B114() { return this.B4 * (this.B81 / 100) * vm.get_nicca_row(2).q }, get C114() { return this.B4 * (this.B81 / 100) * vm.get_nicca_row(2).r },
            get B115() { return this.B4 * (this.B81 / 100) * vm.get_nicca_row(3).q }, get C115() { return this.B4 * (this.B81 / 100) * vm.get_nicca_row(3).r },
            get B116() { return this.B4 * (this.B81 / 100) * vm.get_nicca_row(4).q }, get C116() { return this.B4 * (this.B81 / 100) * vm.get_nicca_row(4).r },
            get B117() { return this.B4 * (this.B81 / 100) * vm.get_nicca_row(5).q }, get C117() { return this.B4 * (this.B81 / 100) * vm.get_nicca_row(5).r },
            get B118() { return this.B4 * (this.B81 / 100) * vm.get_nicca_row(6).q }, get C118() { return this.B4 * (this.B81 / 100) * vm.get_nicca_row(6).r },

            get B121() { return this.B4 * (this.B82 / 100) * vm.get_nicca_row(1).s }, get C121() { return this.B4 * (this.B82 / 100) * vm.get_nicca_row(1).t },
            get B122() { return this.B4 * (this.B82 / 100) * vm.get_nicca_row(2).s }, get C122() { return this.B4 * (this.B82 / 100) * vm.get_nicca_row(2).t },
            get B123() { return this.B4 * (this.B82 / 100) * vm.get_nicca_row(3).s }, get C123() { return this.B4 * (this.B82 / 100) * vm.get_nicca_row(3).t },
            get B124() { return this.B4 * (this.B82 / 100) * vm.get_nicca_row(4).s }, get C124() { return this.B4 * (this.B82 / 100) * vm.get_nicca_row(4).t },
            get B125() { return this.B4 * (this.B82 / 100) * vm.get_nicca_row(5).s }, get C125() { return this.B4 * (this.B82 / 100) * vm.get_nicca_row(5).t },
            get B126() { return this.B4 * (this.B82 / 100) * vm.get_nicca_row(6).s }, get C126() { return this.B4 * (this.B82 / 100) * vm.get_nicca_row(6).t },

            get B129() { return this.B4 * (this.B84 / 100) * vm.get_nicca_row(1).o }, get C129() { return this.B4 * (this.B84 / 100) * vm.get_nicca_row(1).p },
            get B130() { return this.B4 * (this.B84 / 100) * vm.get_nicca_row(2).o }, get C130() { return this.B4 * (this.B84 / 100) * vm.get_nicca_row(2).p },
            get B131() { return this.B4 * (this.B84 / 100) * vm.get_nicca_row(3).o }, get C131() { return this.B4 * (this.B84 / 100) * vm.get_nicca_row(3).p },
            get B132() { return this.B4 * (this.B84 / 100) * vm.get_nicca_row(4).o }, get C132() { return this.B4 * (this.B84 / 100) * vm.get_nicca_row(4).p },
            get B133() { return this.B4 * (this.B84 / 100) * vm.get_nicca_row(5).o }, get C133() { return this.B4 * (this.B84 / 100) * vm.get_nicca_row(5).p },
            get B134() { return this.B4 * (this.B84 / 100) * vm.get_nicca_row(6).o }, get C134() { return this.B4 * (this.B84 / 100) * vm.get_nicca_row(6).p },

            get B137() { return this.B4 * this.B85 * vm.get_nicca_row(1).k }, get C137() { return this.B4 * this.B85 * vm.get_nicca_row(1).l },
            get B138() { return this.B4 * this.B85 * vm.get_nicca_row(2).k }, get C138() { return this.B4 * this.B85 * vm.get_nicca_row(2).l },
            get B139() { return this.B4 * this.B85 * vm.get_nicca_row(3).k }, get C139() { return this.B4 * this.B85 * vm.get_nicca_row(3).l },
            get B140() { return this.B4 * this.B85 * vm.get_nicca_row(4).k }, get C140() { return this.B4 * this.B85 * vm.get_nicca_row(4).l },
            get B141() { return this.B4 * this.B85 * vm.get_nicca_row(5).k }, get C141() { return this.B4 * this.B85 * vm.get_nicca_row(5).l },
            get B142() { return this.B4 * this.B85 * vm.get_nicca_row(6).k }, get C142() { return this.B4 * this.B85 * vm.get_nicca_row(6).l },

            get B145() { return this.B4 * this.B86 * vm.get_nicca_row(1).m }, get C145() { return this.B4 * this.B86 * vm.get_nicca_row(1).n },
            get B146() { return this.B4 * this.B86 * vm.get_nicca_row(2).m }, get C146() { return this.B4 * this.B86 * vm.get_nicca_row(2).n },
            get B147() { return this.B4 * this.B86 * vm.get_nicca_row(3).m }, get C147() { return this.B4 * this.B86 * vm.get_nicca_row(3).n },
            get B148() { return this.B4 * this.B86 * vm.get_nicca_row(4).m }, get C148() { return this.B4 * this.B86 * vm.get_nicca_row(4).n },
            get B149() { return this.B4 * this.B86 * vm.get_nicca_row(5).m }, get C149() { return this.B4 * this.B86 * vm.get_nicca_row(5).n },
            get B150() { return this.B4 * this.B86 * vm.get_nicca_row(6).m }, get C150() { return this.B4 * this.B86 * vm.get_nicca_row(6).n },

            get B173() { return this.B4 * (this.B158 / 100) * vm.get_nicca_row(1).g }, get C173() { return this.B4 * (this.B158 / 100) * vm.get_nicca_row(1).h },
            get B174() { return this.B4 * (this.B158 / 100) * vm.get_nicca_row(2).g }, get C174() { return this.B4 * (this.B158 / 100) * vm.get_nicca_row(2).h },
            get B175() { return this.B4 * (this.B158 / 100) * vm.get_nicca_row(3).g }, get C175() { return this.B4 * (this.B158 / 100) * vm.get_nicca_row(3).h },
            get B176() { return this.B4 * (this.B158 / 100) * vm.get_nicca_row(4).g }, get C176() { return this.B4 * (this.B158 / 100) * vm.get_nicca_row(4).h },
            get B177() { return this.B4 * (this.B158 / 100) * vm.get_nicca_row(5).g }, get C177() { return this.B4 * (this.B158 / 100) * vm.get_nicca_row(5).h },
            get B178() { return this.B4 * (this.B158 / 100) * vm.get_nicca_row(6).g }, get C178() { return this.B4 * (this.B158 / 100) * vm.get_nicca_row(6).h },

            get B181() { return this.B4 * (this.B157 / 100) * vm.get_nicca_row(1).e }, get C181() { return this.B4 * (this.B157 / 100) * vm.get_nicca_row(1).f },
            get B182() { return this.B4 * (this.B157 / 100) * vm.get_nicca_row(2).e }, get C182() { return this.B4 * (this.B157 / 100) * vm.get_nicca_row(2).f },
            get B183() { return this.B4 * (this.B157 / 100) * vm.get_nicca_row(3).e }, get C183() { return this.B4 * (this.B157 / 100) * vm.get_nicca_row(3).f },
            get B184() { return this.B4 * (this.B157 / 100) * vm.get_nicca_row(4).e }, get C184() { return this.B4 * (this.B157 / 100) * vm.get_nicca_row(4).f },
            get B185() { return this.B4 * (this.B157 / 100) * vm.get_nicca_row(5).e }, get C185() { return this.B4 * (this.B157 / 100) * vm.get_nicca_row(5).f },
            get B186() { return this.B4 * (this.B157 / 100) * vm.get_nicca_row(6).e }, get C186() { return this.B4 * (this.B157 / 100) * vm.get_nicca_row(6).f },

            get B197() { return this.B4 * (this.B162 / 100) * vm.get_nicca_row(1).k }, get C197() { return this.B4 * (this.B162 / 100) * vm.get_nicca_row(1).l },
            get B198() { return this.B4 * (this.B162 / 100) * vm.get_nicca_row(2).k }, get C198() { return this.B4 * (this.B162 / 100) * vm.get_nicca_row(2).l },
            get B199() { return this.B4 * (this.B162 / 100) * vm.get_nicca_row(3).k }, get C199() { return this.B4 * (this.B162 / 100) * vm.get_nicca_row(3).l },
            get B200() { return this.B4 * (this.B162 / 100) * vm.get_nicca_row(4).k }, get C200() { return this.B4 * (this.B162 / 100) * vm.get_nicca_row(4).l },
            get B201() { return this.B4 * (this.B162 / 100) * vm.get_nicca_row(5).k }, get C201() { return this.B4 * (this.B162 / 100) * vm.get_nicca_row(5).l },
            get B202() { return this.B4 * (this.B162 / 100) * vm.get_nicca_row(6).k }, get C202() { return this.B4 * (this.B162 / 100) * vm.get_nicca_row(6).l },

            get B189() { return this.B4 * (this.B159 / 100) * vm.get_nicca_row(1).m }, get C189() { return this.B4 * (this.B159 / 100) * vm.get_nicca_row(1).n },
            get B190() { return this.B4 * (this.B159 / 100) * vm.get_nicca_row(2).m }, get C190() { return this.B4 * (this.B159 / 100) * vm.get_nicca_row(2).n },
            get B191() { return this.B4 * (this.B159 / 100) * vm.get_nicca_row(3).m }, get C191() { return this.B4 * (this.B159 / 100) * vm.get_nicca_row(3).n },
            get B192() { return this.B4 * (this.B159 / 100) * vm.get_nicca_row(4).m }, get C192() { return this.B4 * (this.B159 / 100) * vm.get_nicca_row(4).n },
            get B193() { return this.B4 * (this.B159 / 100) * vm.get_nicca_row(5).m }, get C193() { return this.B4 * (this.B159 / 100) * vm.get_nicca_row(5).n },
            get B194() { return this.B4 * (this.B159 / 100) * vm.get_nicca_row(6).m }, get C194() { return this.B4 * (this.B159 / 100) * vm.get_nicca_row(6).n },

            get N7() { return (this.B21 = this.G20 ? 1 + (this.B18 / 100) : 1) * vm.get_exames_row(1).k },
            get Q7() { return (this.B21 = this.G20 ? 1 + (this.B18 / 100) : 1) * vm.get_exames_row(2).k },
            get T7() { return (this.B21 = this.G20 ? 1 + (this.B18 / 100) : 1) * vm.get_exames_row(3).k },
            get W7() { return (this.B21 = this.G20 ? 1 + (this.B18 / 100) : 1) * vm.get_exames_row(4).k },
            get Z7() { return (this.B21 = this.G20 ? 1 + (this.B18 / 100) : 1) * vm.get_exames_row(5).k },

            get O8() { return (this.B21 = this.G20 ? 1 + (this.B18 / 100) : 1) * vm.get_exames_row(1).aa },
            get P8() { return (this.B21 = this.G20 ? 1 + (this.B19 / 100) : 1) * vm.get_exames_row(1).t },
            get R8() { return (this.B21 = this.G20 ? 1 + (this.B18 / 100) : 1) * vm.get_exames_row(2).aa },
            get S8() { return (this.B21 = this.G20 ? 1 + (this.B19 / 100) : 1) * vm.get_exames_row(2).t },
            get U8() { return (this.B21 = this.G20 ? 1 + (this.B18 / 100) : 1) * vm.get_exames_row(3).aa },
            get V8() { return (this.B21 = this.G20 ? 1 + (this.B19 / 100) : 1) * vm.get_exames_row(3).t },
            get X8() { return (this.B21 = this.G20 ? 1 + (this.B18 / 100) : 1) * vm.get_exames_row(4).aa },
            get Y8() { return (this.B21 = this.G20 ? 1 + (this.B19 / 100) : 1) * vm.get_exames_row(4).t },
            get AA8() { return (this.B21 = this.G20 ? 1 + (this.B18 / 100) : 1) * vm.get_exames_row(5).aa },
            get AB8() { return (this.B21 = this.G20 ? 1 + (this.B19 / 100) : 1) * vm.get_exames_row(5).t },

            get P9() { return (this.B21 = this.G20 ? 1 + (this.B20 / 100) : 1) * vm.get_exames_row(1).r },
            get S9() { return (this.B21 = this.G20 ? 1 + (this.B20 / 100) : 1) * vm.get_exames_row(2).r },
            get V9() { return (this.B21 = this.G20 ? 1 + (this.B20 / 100) : 1) * vm.get_exames_row(3).r },
            get Y9() { return (this.B21 = this.G20 ? 1 + (this.B20 / 100) : 1) * vm.get_exames_row(4).r },
            get AB9() { return (this.B21 = this.G20 ? 1 + (this.B20 / 100) : 1) * vm.get_exames_row(5).r },

            get N10() { return vm.get_exames_row(1).l },
            get O10() { return (this.B21 = this.G20 ? 1 + (this.B18 / 100) : 1) * vm.get_exames_row(1).ab },
            get P10() { return vm.get_exames_row(1).s },
            get Q10() { return vm.get_exames_row(2).l },
            get R10() { return (this.B21 = this.G20 ? 1 + (this.B18 / 100) : 1) * vm.get_exames_row(2).ab },
            get S10() { return vm.get_exames_row(2).s },
            get T10() { return vm.get_exames_row(3).l },
            get U10() { return (this.B21 = this.G20 ? 1 + (this.B18 / 100) : 1) * vm.get_exames_row(3).ab },
            get V10() { return vm.get_exames_row(3).s },
            get W10() { return vm.get_exames_row(4).l },
            get X10() { return (this.B21 = this.G20 ? 1 + (this.B18 / 100) : 1) * vm.get_exames_row(4).ab },
            get Y10() { return vm.get_exames_row(4).s },
            get Z10() { return vm.get_exames_row(5).l },
            get AA10() { return (this.B21 = this.G20 ? 1 + (this.B18 / 100) : 1) * vm.get_exames_row(5).ab },
            get AB10() { return vm.get_exames_row(5).s },

            get N11() { return this.H14 * this.N7 * this.E14 },
            get O11() { return (this.O8 * (this.I50 / 100) * this.E50) },
            get Q11() { return this.H14 * this.Q7 * this.E14 },
            get R11() { return (this.R8 * this.H50 * this.E50) },
            get T11() { return this.H14 * this.T7 * this.E14 },
            get U11() { return this.U8 * this.H50 * this.E50 },
            get W11() { return this.H14 * this.W7 * this.E14 },
            get X11() { return this.X8 * this.H50 * this.E50 },
            get Z11() { return this.H14 * this.Z7 * this.E14 },
            get AA11() { return this.AA8 * this.H50 * this.E50 },

            get N13() { return this.B43 }, get N14() { return this.C43 },
            get O13() { return this.B173 }, get O14() { return this.C173 },
            get P13() { return this.B97 }, get P14() { return this.C97 },
            get Q13() { return this.B44 }, get Q14() { return this.C44 },
            get Q13() { return this.B44 }, get Q14() { return this.C44 },
            get R13() { return this.B174 }, get R14() { return this.C174 },
            get S13() { return this.B98 }, get S14() { return this.C98 },
            get T13() { return this.B45 }, get T14() { return this.C45 },
            get U13() { return this.B175 }, get U14() { return this.C175 },
            get V13() { return this.B99 }, get V14() { return this.C99 },
            get W13() { return this.B46 }, get W14() { return this.C46 },
            get X13() { return this.B176 }, get X14() { return this.C176 },
            get Y13() { return this.B100 }, get Y14() { return this.C100 },
            get Z13() { return this.B47 }, get Z14() { return this.C47 },
            get AA13() { return this.B177 }, get AA14() { return this.C177 },
            get AB13() { return this.B101 }, get AB14() { return this.C101 },

            get N6() { return this.N7 + this.N8 + this.N9 + this.N10 + this.N11 },
            get O6() { return this.O7 + this.O8 + this.O9 + this.O10 + this.O11 },
            get P6() { return this.P7 + this.P8 + this.P9 + this.P10 },
            get Q6() { return this.Q7 + this.Q8 + this.Q9 + this.Q10 + this.Q11 },
            get R6() { return this.R7 + this.R8 + this.R9 + this.R10 + this.R11 },
            get S6() { return this.S7 + this.S8 + this.S9 + this.S10 },
            get T6() { return this.T7 + this.T8 + this.T9 + this.T10 + this.T11 },
            get U6() { return this.U7 + this.U8 + this.U9 + this.U10 + this.U11 },
            get V6() { return this.V7 + this.V8 + this.V9 + this.V10 },
            get W6() { return this.W7 + this.W8 + this.W9 + this.W10 + this.W11 },
            get X6() { return this.X7 + this.X8 + this.X9 + this.X10 + this.X11 },
            get Y6() { return this.Y7 + this.Y8 + this.Y9 + this.Y10 },
            get Z6() { return this.Z7 + this.Z8 + this.Z9 + this.Z10 + this.Z11 },
            get AA6() { return this.AA7 + this.AA8 + this.AA9 + this.AA10 + this.AA11 },
            get AB6() { return this.AB7 + this.AB8 + this.AB9 + this.AB10 },

            get N22() { return this.N7 * this.B9 },
            get N23() { return this.N8 * this.B10 },
            get N24() { return this.N9 * this.B11 },
            get N25() { return this.N10 * this.B12 },
            get N26() { return this.N11 * this.G12 },
            get N27() { return this.N12 * this.B13 },

            get O22() { return this.O7 * this.B9 },
            get O23() { return this.O8 * this.B10 },
            get O24() { return this.O9 * this.B11 },
            get O25() { return this.O10 * this.B12 },
            get O26() { return this.O11 * this.G48 },

            get P22() { return this.P7 * this.B9 },
            get P23() { return this.P8 * this.B10 },
            get P24() { return this.P9 * this.B11 },
            get P25() { return this.P10 * this.B12 },

            get Q22() { return this.Q7 * this.B9 },
            get Q23() { return this.Q8 * this.B10 },
            get Q24() { return this.Q9 * this.B11 },
            get Q25() { return this.Q10 * this.B12 },
            get Q26() { return this.Q11 * this.G12 },

            get R22() { return this.R7 * this.B9 },
            get R23() { return this.R8 * this.B10 },
            get R24() { return this.R9 * this.B11 },
            get R25() { return this.R10 * this.B12 },
            get R26() { return this.R11 * this.G48 },

            get S22() { return this.S7 * this.B9 },
            get S23() { return this.S8 * this.B10 },
            get S24() { return this.S9 * this.B11 },
            get S25() { return this.S10 * this.B12 },

            get T22() { return this.T7 * this.B9 },
            get T23() { return this.T8 * this.B10 },
            get T24() { return this.T9 * this.B11 },
            get T25() { return this.T10 * this.B12 },
            get T26() { return this.T11 * this.G12 },

            get U22() { return this.U7 * this.B9 },
            get U23() { return this.U8 * this.B10 },
            get U24() { return this.U9 * this.B11 },
            get U25() { return this.U10 * this.B12 },
            get U26() { return this.U11 * this.G48 },

            get V22() { return this.V7 * this.B9 },
            get V23() { return this.V8 * this.B10 },
            get V24() { return this.V9 * this.B11 },
            get V25() { return this.V10 * this.B12 },

            get W22() { return this.W7 * this.B9 },
            get W23() { return this.W8 * this.B10 },
            get W24() { return this.W9 * this.B11 },
            get W25() { return this.W10 * this.B12 },
            get W26() { return this.W11 * this.G12 },

            get X22() { return this.X7 * this.B9 },
            get X23() { return this.X8 * this.B10 },
            get X24() { return this.X9 * this.B11 },
            get X25() { return this.X10 * this.B12 },
            get X26() { return this.X11 * this.G48 },

            get Y22() { return this.Y7 * this.B9 },
            get Y23() { return this.Y8 * this.B10 },
            get Y24() { return this.Y9 * this.B11 },
            get Y25() { return this.Y10 * this.B12 },

            get Z22() { return this.Z7 * this.B9 },
            get Z23() { return this.Z8 * this.B10 },
            get Z24() { return this.Z9 * this.B11 },
            get Z25() { return this.Z10 * this.B12 },
            get Z26() { return this.Z11 * this.G12 },

            get AA22() { return this.AA7 * this.B9 },
            get AA23() { return this.AA8 * this.B10 },
            get AA24() { return this.AA9 * this.B11 },
            get AA25() { return this.AA10 * this.B12 },
            get AA26() { return this.AA11 * this.G48 },

            get AB22() { return this.AB7 * this.B9 },
            get AB23() { return this.AB8 * this.B10 },
            get AB24() { return this.AB9 * this.B11 },
            get AB25() { return this.AB10 * this.B12 },

            get N21() { return this.N22 + this.N23 + this.N24 + this.N25 + this.N26 },
            get O21() { return this.O22 + this.O23 + this.O24 + this.O25 + this.O26 },
            get P21() { return this.P22 + this.P23 + this.P24 + this.P25 },
            get Q21() { return this.Q22 + this.Q23 + this.Q24 + this.Q25 + this.Q26 },
            get R21() { return this.R22 + this.R23 + this.R24 + this.R25 + this.R26 },
            get S21() { return this.S22 + this.S23 + this.S24 + this.S25 },
            get T21() { return this.T22 + this.T23 + this.T24 + this.T25 + this.T26 },
            get U21() { return this.U22 + this.U23 + this.U24 + this.U25 + this.U26 },
            get V21() { return this.V22 + this.V23 + this.V24 + this.V25 },
            get W21() { return this.W22 + this.W23 + this.W24 + this.W25 + this.W26 },
            get X21() { return this.X22 + this.X23 + this.X24 + this.X25 + this.X26 },
            get Y21() { return this.Y22 + this.Y23 + this.Y24 + this.Y25 },
            get Z21() { return this.Z22 + this.Z23 + this.Z24 + this.Z25 + this.Z26 },
            get AA21() { return this.AA22 + this.AA23 + this.AA24 + this.AA25 + this.AA26 },
            get AB21() { return this.AB22 + this.AB23 + this.AB24 + this.AB25 },

            get K6() { return Math.round(this.N6 + this.Q6 + this.T6 + this.W6 + this.Z6) },
            get L6() { return Math.round(this.O6 + this.R6 + this.U6 + this.X6 + this.AA6) },
            get M6() { return Math.round(this.P6 + this.S6 + this.V6 + this.Y6 + this.AB6) },

            get K7() { return round2dec(this.N7 + this.Q7 + this.T7 + this.W7 + this.Z7) },
            get L7() { return Math.round(this.O7 + this.R7 + this.U7 + this.X7 + this.AA7) },
            get M7() { return Math.round(this.P7 + this.S7 + this.V7 + this.Y7 + this.AB7) },

            get K8() { return Math.round(this.N8 + this.Q8 + this.T8 + this.W8 + this.Z8) },
            get L8() { return Math.round(this.O8 + this.R8 + this.U8 + this.X8 + this.AA8) },
            get M8() { return Math.round(this.P8 + this.S8 + this.V8 + this.Y8 + this.AB8) },

            get K9() { return Math.round(this.N9 + this.Q9 + this.T9 + this.W9 + this.Z9) },
            get L9() { return Math.round(this.O9 + this.R9 + this.U9 + this.X9 + this.AA9) },
            get M9() { return Math.round(this.P9 + this.S9 + this.V9 + this.Y9 + this.AB9) },

            get K10() { return Math.round(this.N10 + this.Q10 + this.T10 + this.W10 + this.Z10) },
            get L10() { return Math.round(this.O10 + this.R10 + this.U10 + this.X10 + this.AA10) },
            get M10() { return Math.round(this.P10 + this.S10 + this.V10 + this.Y10 + this.AB10) },

            get K11() { return Math.round(this.N11 + this.Q11 + this.T11 + this.W11 + this.Z11) },
            get L11() { return Math.round(this.O11 + this.R11 + this.U11 + this.X11 + this.AA11) },
            get M11() { return 0 },

            get K12() { return Math.round(this.B4 * (this.B28 / 100)) },
            get L12() { return Math.round(this.B4 * (this.B158 / 100)) },
            get M12() { return Math.round(this.B4 * ((this.B80 / 100))) },

            get K13() { return Math.round(this.N13 + this.Q13 + this.T13 + this.W13 + this.Z13) },
            get L13() { return Math.round(this.O13 + this.R13 + this.U13 + this.X13 + this.AA13) },
            get M13() { return Math.round(this.P13 + this.S13 + this.V13 + this.Y13 + this.AB13) },

            get K14() { return Math.round(this.N14 + this.Q14 + this.T14 + this.W14 + this.Z14) },
            get L14() { return Math.round(this.O14 + this.R14 + this.U14 + this.X14 + this.AA14) },
            get M14() { return Math.round(this.P14 + this.S14 + this.V14 + this.Y14 + this.AB14) },

            get K21() { return Math.round(this.N21 + this.Q21 + this.T21 + this.W21 + this.Z21) },
            get L21() { return Math.round(this.O21 + this.R21 + this.U21 + this.X21 + this.AA21) },
            get M21() { return Math.round(this.P21 + this.S21 + this.V21 + this.Y21 + this.AB21) },

            get N28() { return (this.N13 * this.B13) }, get N29() { return (this.N14 * this.B14) },
            get O28() { return (this.O13 * this.B13) }, get O29() { return (this.O14 * this.B14) },
            get P28() { return (this.P13 * this.B13) }, get P29() { return (this.P14 * this.B14) },
            get Q28() { return ((this.Q13 - this.N13) * this.B13) }, get Q29() { return ((this.Q14 - this.N14) * this.B14) },
            get R28() { return ((this.R13 - this.O13) * this.B13) }, get R29() { return ((this.R14 - this.O14) * this.B14) },
            get S28() { return ((this.S13 - this.P13) * this.B13) }, get S29() { return ((this.S14 - this.P14) * this.B14) },
            get T28() { return ((this.T13 - this.Q13) * this.B13) }, get T29() { return ((this.T14 - this.Q14) * this.B14) },
            get U28() { return ((this.U13 - this.R13) * this.B13) }, get U29() { return ((this.U14 - this.R14) * this.B14) },
            get V28() { return ((this.V13 - this.S13) * this.B13) }, get V29() { return ((this.V14 - this.S14) * this.B14) },
            get W28() { return ((this.W13 - this.T13) * this.B13) }, get W29() { return ((this.W14 - this.T14) * this.B14) },
            get X28() { return ((this.X13 - this.U13) * this.B13) }, get X29() { return ((this.X14 - this.U14) * this.B14) },
            get Y28() { return ((this.Y13 - this.V13) * this.B13) }, get Y29() { return ((this.Y14 - this.V14) * this.B14) },
            get Z28() { return ((this.Z13 - this.W13) * this.B13) }, get Z29() { return ((this.Z14 - this.W14) * this.B14) },
            get AA28() { return ((this.AA13 - this.X13) * this.B13) }, get AA29() { return ((this.AA14 - this.X14) * this.B14) },
            get AB28() { return ((this.AB13 - this.Y13) * this.B13) }, get AB29() { return ((this.AB14 - this.Y14) * this.B14) },

            get K28() { return Math.round(this.N28 + this.Q28 + this.T28 + this.W28 + this.Z28) },
            get L28() { return Math.round(this.O28 + this.R28 + this.U28 + this.X28 + this.AA28) },
            get M28() { return Math.round(this.P28 + this.S28 + this.V28 + this.Y28 + this.AB28) },

            get K29() { return Math.round(this.N29 + this.Q29 + this.T29 + this.W29 + this.Z29) },
            get L29() { return Math.round(this.O29 + this.R29 + this.U29 + this.X29 + this.AA29) },
            get M29() { return Math.round(this.P29 + this.S29 + this.V29 + this.Y29 + this.AB29) },

            get L54() { return this.K21 }, get M54() { return this.L21 }, get N54() { return this.M21 },
            get L55() { return this.K28 }, get M55() { return this.L28 }, get N55() { return this.M28 },
            get L56() { return this.K29 }, get M56() { return this.L29 }, get N56() { return this.M29 },

            get L58() { return this.L54 + this.L55 + this.L56 },
            get M58() { return this.M54 + this.M55 + this.M56 },
            get N58() { return this.N54 + this.N55 + this.N56 },

            get O54() { return this.L55 + this.L56 }, get P54() { return this.M55 + this.M56 }, get Q54() { return this.N55 + this.N56 },

            get S31() { return this.N21 }, get T31() { return this.O21 }, get U31() { return this.P21 },
            get S32() { return this.Q21 }, get T32() { return this.R21 }, get U32() { return this.S21 },
            get S33() { return this.T21 }, get T33() { return this.U21 }, get U33() { return this.V21 },
            get S34() { return this.W21 }, get T34() { return this.X21 }, get U34() { return this.Y21 },
            get S35() { return this.Z21 }, get T35() { return this.AA21 }, get U35() { return this.AB21 },

            get X31() { return Math.round(this.S31) }, get Y31() { return Math.round(this.T31) }, get Z31() { return Math.round(this.U31) },
            get X32() { return Math.round(this.S32 + this.S31) }, get Y32() { return Math.round(this.T32 + this.T31) }, get Z32() { return Math.round(this.U32 + this.U31) },
            get X33() { return Math.round(this.X32 + this.S33) }, get Y33() { return Math.round(this.Y32 + this.T33) }, get Z33() { return Math.round(this.Z32 + this.U33) },
            get X34() { return Math.round(this.X33 + this.S34) }, get Y34() { return Math.round(this.Y33 + this.T34) }, get Z34() { return Math.round(this.Z33 + this.U34) },
            get X35() { return Math.round(this.X34 + this.S35) }, get Y35() { return Math.round(this.Y34 + this.T35) }, get Z35() { return Math.round(this.Z34 + this.U35) },

            get B4_formatted() {
                return new Intl.NumberFormat("en-US", {
                    notation: "compact",
                    compactDisplay: "long",
                }).format(this.B4)
            }
        };

        vm.nic_ca = [];
        vm.exames = [];

        $scope.$watch('vm.model', function (newVal, oldVal) {
            vm.populateNiCa();
            vm.populateExames();
            vm.generateChartData();
            myChart1.update();
            myChart2.update();
            myChart3.update();
            myChart4.update();
            //console.log(vm.model);
        }, true);


        vm.generateChartData = () => {
            var data1 = [vm.model.K6, vm.model.L6, vm.model.M6];
            var data2 = [
                [vm.model.X31, vm.model.X32, vm.model.X33, vm.model.X34, vm.model.X35],
                [vm.model.Y31, vm.model.Y32, vm.model.Y33, vm.model.Y34, vm.model.Y35],
                [vm.model.Z31, vm.model.Z32, vm.model.Z33, vm.model.Z34, vm.model.Z35]
            ];
            var data4 = [vm.model.L58, vm.model.M58, vm.model.N58];
            var data3 = [vm.model.O54, vm.model.P54, vm.model.Q54];

            myChart1.config.data.datasets[0].data = data1;

            myChart2.config.data.datasets[0].data = data2[0];
            myChart2.config.data.datasets[1].data = data2[1];
            myChart2.config.data.datasets[2].data = data2[2];

            myChart3.config.data.datasets[0].data = data3;

            myChart4.config.data.datasets[0].data = data4;

        }

        vm.addToSessionStorage = (key, val) => {
            const item = sessionStorage.getItem(key);
            if (!item || item === undefined || item === null) {
                sessionStorage.setItem(key, val);
            }

            var myModalEl = document.getElementById('myModal');
            var modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        }

        vm.add_nic_ca = (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) => {
            const nicca = {
                a: a, b: b, c: c, d: d, e: e, f: f, g: g, h: h, i: i, j: j, k: k, l: l, m: m, n: n, o: o, p: p, q: q,
                r: q / (m / n),
                s: s,
                t: s / (m / n)
            }

            vm.nic_ca.push(nicca);

            if (a === 4 || a === 6) {
                vm.get_nicca_row(a - 1).e = (vm.get_nicca_row(a - 2).e + vm.get_nicca_row(a).e) / 2;
                vm.get_nicca_row(a - 1).f = (vm.get_nicca_row(a - 2).f + vm.get_nicca_row(a).f) / 2;
                vm.get_nicca_row(a - 1).g = (vm.get_nicca_row(a - 2).g + vm.get_nicca_row(a).g) / 2;
                vm.get_nicca_row(a - 1).h = (vm.get_nicca_row(a - 2).h + vm.get_nicca_row(a).h) / 2;
                vm.get_nicca_row(a - 1).i = (vm.get_nicca_row(a - 2).i + vm.get_nicca_row(a).i) / 2;
                vm.get_nicca_row(a - 1).j = (vm.get_nicca_row(a - 2).j + vm.get_nicca_row(a).j) / 2;
                vm.get_nicca_row(a - 1).k = (vm.get_nicca_row(a - 2).k + vm.get_nicca_row(a).k) / 2;
                vm.get_nicca_row(a - 1).l = (vm.get_nicca_row(a - 2).l + vm.get_nicca_row(a).l) / 2;
                vm.get_nicca_row(a - 1).m = (vm.get_nicca_row(a - 2).m + vm.get_nicca_row(a).m) / 2;
                vm.get_nicca_row(a - 1).m = (vm.get_nicca_row(a - 2).n + vm.get_nicca_row(a).n) / 2;
                vm.get_nicca_row(a - 1).o = (vm.get_nicca_row(a - 2).o + vm.get_nicca_row(a).o) / 2;
                vm.get_nicca_row(a - 1).p = (vm.get_nicca_row(a - 2).p + vm.get_nicca_row(a).p) / 2;
            }

            if (a === 6) {
                vm.get_nicca_row(a - 4).q = vm.get_nicca_row(a - 5).q + (vm.get_nicca_row(a).q - vm.get_nicca_row(a - 5).q) / 5;
                vm.get_nicca_row(a - 3).q = vm.get_nicca_row(a - 4).q + (vm.get_nicca_row(a).q - vm.get_nicca_row(a - 5).q) / 5;
                vm.get_nicca_row(a - 2).q = vm.get_nicca_row(a - 3).q + (vm.get_nicca_row(a).q - vm.get_nicca_row(a - 5).q) / 5;
                vm.get_nicca_row(a - 1).q = vm.get_nicca_row(a - 2).q + (vm.get_nicca_row(a).q - vm.get_nicca_row(a - 5).q) / 5;

                vm.get_nicca_row(a - 4).s = vm.get_nicca_row(a - 5).s + (vm.get_nicca_row(a).s - vm.get_nicca_row(a - 5).s) / 5;
                vm.get_nicca_row(a - 3).s = vm.get_nicca_row(a - 4).s + (vm.get_nicca_row(a).s - vm.get_nicca_row(a - 5).s) / 5;
                vm.get_nicca_row(a - 2).s = vm.get_nicca_row(a - 3).s + (vm.get_nicca_row(a).s - vm.get_nicca_row(a - 5).s) / 5;
                vm.get_nicca_row(a - 1).s = vm.get_nicca_row(a - 2).s + (vm.get_nicca_row(a).s - vm.get_nicca_row(a - 5).s) / 5;
            }
        }

        vm.get_exames_row = (year) => {
            return vm.exames.find(x => x.a === year)
        }

        vm.get_nicca_row = (year) => {
            return vm.nic_ca.find(x => x.a === year)
        }

        vm.add_exames = (a, b, c) => {

            let f_val, g_val, h_val, i_val, j_val, k_val, n_val, p_val, r_val, v_val, w_val, x_val, y_val, aa_val, ab_val = 0;
            let d_val = vm.model.B4;
            let e_val = a === 1 ? d_val : 0;
            let m_val = a === 1 ? d_val : 0;
            let o_val = a === 1 ? d_val * (vm.model.B81 / 100) : 0;
            let q_val = a === 1 ? d_val * (vm.model.B83 / 100) : 0;
            let s_val = o_val;
            let t_val = q_val;
            let u_val = a === 1 ? d_val : 0;
            let z_val = a === 1 ? d_val * (vm.model.B159 / 100) : 0;

            if (a === 1) {
                f_val = (vm.model.E26 >= a ? 0 : Math.floor((a - 0.001) / vm.model.E26) * (vm.model.B26 / 100) * d_val)
                g_val = (vm.model.E32 >= a ? 0 : Math.floor((a - 0.00001) / vm.model.E32) * d_val * (vm.model.B32 / 100));
                h_val = (vm.model.E32 < a ? (vm.model.E34 >= a ? 0 : Math.floor((a - 0.00001) / vm.model.E34) * vm.model.E34 * d_val) : 0);
                i_val = (vm.model.E32 >= a ? 0 : Math.floor((a - 0.00001) / vm.model.E32)) * d_val * vm.model.B35;
                n_val = (vm.model.E78 >= a ? 0 : Math.floor((a - 0.001) / vm.model.E78) * (vm.model.B78 / 100) * d_val);
                p_val = (vm.model.E82 >= a ? 0 : Math.floor((a - 0.001) / (vm.model.E82 / 100)) * vm.model.B82 * d_val);
                v_val = (vm.model.E156 >= a ? 0 : Math.floor((a - 0.001) / (vm.model.E156)) * vm.model.B156 * d_val);
                w_val = (vm.model.E162 >= a ? 0 : Math.floor((a - 0.001) / (vm.model.E162)) * (vm.model.B162 / 100) * d_val);
                x_val = (vm.model.E162 < a ? (vm.model.E164 >= a ? 0 : Math.floor((a - 0.00001) / vm.model.E164) * vm.model.B164 * d_val) : 0);
                y_val = (vm.model.E162 >= a ? 0 : Math.floor((a - 0.00001) / (vm.model.E162))) * vm.model.B165 * d_val;
                //=IF(Análise!$E$162>=C6,0,ROUNDDOWN((C6-0.00001)/Análise!$E$162,0))*D5*Análise!$B$165
            }
            else if (a === 2) {
                f_val = (vm.model.E26 >= a ? 0 : Math.floor(c / vm.model.E26) * (vm.model.B26 / 100) * d_val)
                g_val = (vm.model.E32 >= a ? 0 : (vm.model.E32 < c ? 0 : 1)) * d_val * (vm.model.B32 / 100);
                h_val = (vm.model.E32 < a ? (vm.model.E34 + vm.model.E32 >= a ? 0 : Math.floor((a - vm.model.E32 - 0.000001) / vm.model.E34, 0) * vm.model.B34 * d_val) : 0);
                i_val = (vm.model.E32 >= a ? 0 : (vm.model.E32 < c ? 0 : 1)) * d_val * vm.model.B35;
                n_val = (vm.model.E78 >= a ? 0 : Math.floor(c / vm.model.E78) * vm.model.B78 * d_val);
                p_val = (vm.model.E82 >= a ? 0 : Math.floor(c / vm.model.E82) * (vm.model.B82 / 100) * d_val);
                v_val = (vm.model.E156 >= a ? 0 : Math.floor(c / vm.model.E156) * (vm.model.B156 / 100) * d_val);
                w_val = (vm.model.E162 >= a ? 0 : (vm.model.E162 < c ? 0 : 1) * (vm.model.B162 / 100) * d_val);
                x_val = (vm.model.E162 < a ? (vm.model.E164 >= a ? 0 : Math.floor((a - vm.model.E162 - 0.00001) / vm.model.E164) * vm.model.B164 * d_val) : 0);
                y_val = (vm.model.E162 >= a ? 0 : (vm.model.E162 < c ? 0 : 1)) * d_val * vm.model.B165;
            }
            else {
                f_val = (vm.model.E26 >= a ? 0 : Math.floor(c / vm.model.E26) * (vm.model.B26 / 100) * d_val - vm.get_exames_sum('f', 2))
                g_val = (vm.model.E32 >= a ? 0 : (vm.model.E32 < c ? 0 : 1)) * d_val * (vm.model.B32 / 100);
                h_val = (vm.model.E32 < a ? (vm.model.E34 + vm.model.E32 >= a ? 0 : Math.floor((a - vm.model.E32 - 0.000001) / vm.model.E34, 0) * vm.model.B34 * d_val - vm.get_exames_sum('h', 2)) : 0);
                i_val = (vm.model.E32 >= a ? 0 : (vm.model.E32 < c ? 0 : 1)) * d_val * vm.model.B35;
                n_val = (vm.model.E78 >= a ? 0 : Math.floor(c / vm.model.E78) * (vm.model.B78 / 100) * d_val - vm.get_exames_sum('n', 2));
                p_val = (vm.model.E82 >= a ? 0 : (Math.floor(c / vm.model.E82) * (vm.model.B82 / 100) * d_val) - vm.get_exames_sum('p', 2));
                v_val = (vm.model.E156 >= a ? 0 : Math.floor(c / vm.model.E156) * (vm.model.B156 / 100) * d_val - vm.get_exames_sum('f', 2));
                w_val = (vm.model.E162 >= a ? 0 : (vm.model.E162 < c ? 0 : 1) * (vm.model.B162 / 100) * d_val);
                x_val = (vm.model.E162 < a ? (vm.model.E164 >= a ? 0 : Math.floor((a - vm.model.E162 - 0.00001) / vm.model.E164) * vm.model.B164 * d_val - vm.get_exames_sum('h', 2)) : 0);
                y_val = (vm.model.E162 >= a ? 0 : (vm.model.E162 < c ? 0 : 1)) * d_val * vm.model.B165;
            }

            j_val = a === 1 ? d_val * (vm.model.B29 / 100) : 0;
            k_val = e_val + f_val + g_val + h_val;
            r_val = m_val + n_val + p_val;
            aa_val = u_val + v_val + w_val + x_val;
            ab_val = y_val + z_val;

            const exames = {
                a: a, b: b, c: c,
                d: d_val,
                e: e_val,
                f: f_val,
                g: g_val,
                h: h_val,
                i: i_val,
                j: j_val,
                k: k_val,
                l: i_val + j_val,
                m: m_val,
                n: n_val,
                o: o_val,
                p: p_val,
                q: q_val,
                r: r_val,
                s: s_val,
                t: t_val,
                u: u_val,
                v: v_val,
                w: w_val,
                x: x_val,
                y: y_val,
                z: z_val,
                aa: aa_val,
                ab: ab_val
            }

            vm.exames.push(exames);
        }

        vm.get_exames_sum = (prop, minYear) => {
            var arr = new Collection(...vm.exames.filter(e => e.a >= minYear));
            return (arr.sum(prop));
        }

        initializaChart1 = () => {
            const ctx1 = document.getElementById('myChart1').getContext('2d');
            const labels1 = ["Cit convencional", "Cit meio liquido", "OnClarity"];
            const chartData1 = {
                labels: labels1,
                datasets: [
                    {
                        data: [vm.model.K6, vm.model.L6, vm.model.M6],
                        backgroundColor: ["#023970", "#FDB713", "#D15421"],
                    }
                ]
            };

            const chartConfig1 = {
                type: 'bar',
                data: chartData1,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    locale: 'pt-BR',
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Quantidade total de exames em 5 anos'
                        },
                        legend: {
                            display: false
                        },
                    }
                },
            };

            myChart1 = new Chart(ctx1, chartConfig1);
        }

        initializaChart2 = () => {
            const ctx2 = document.getElementById('myChart2').getContext('2d');
            const labels2 = ["1", "2", "3", "4", "5"];
            const chartData2 = {
                labels: labels2,
                datasets: [
                    {
                        label: "Cit convencional",
                        data: [vm.model.X31, vm.model.X32, vm.model.X33, vm.model.X34, vm.model.X35],
                        borderWidth: 2,
                        borderColor: "#023970",
                        backgroundColor: "#023970",
                    },
                    {
                        label: "Cit meio liquido",
                        data: [vm.model.Y31, vm.model.Y32, vm.model.Y33, vm.model.Y34, vm.model.Y35],
                        borderWidth: 2,
                        borderColor: "#FDB713",
                        backgroundColor: "#FDB713",
                    },
                    {
                        label: 'OnClarity',
                        data: [vm.model.Z31, vm.model.Z32, vm.model.Z33, vm.model.Z34, vm.model.Z35],
                        borderWidth: 2,
                        borderColor: "#D15421",
                        backgroundColor: "#D15421",
                    },
                ]
            };

            const chartConfig2 = {
                type: 'line',
                data: chartData2,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    locale: 'pt-BR',
                    scales: {
                        y: {
                            ticks: {
                                // Include a dollar sign in the ticks
                                callback: function (value, index, ticks) {
                                    return value.toLocaleString('pt-BR', { style: 'currency', currency: "BRL", minimumFractionDigits: 0, });
                                }
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            position: 'bottom',
                        },
                        title: {
                            display: true,
                            text: 'Gastos anuais acumulados com exames'
                        },
                        tooltip: {
                            mode: 'x',
                            callbacks: {
                                label: function (context) {
                                    let label = context.dataset.label || '';

                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed.y !== null) {
                                        label += new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0, }).format(context.parsed.y);
                                    }
                                    return label;
                                }
                            }
                        },
                    }
                },
            };

            myChart2 = new Chart(ctx2, chartConfig2);
        }

        initializaChart3 = () => {
            const ctx3 = document.getElementById('myChart3').getContext('2d');
            const labels3 = ["Cit convencional", "Cit meio liquido", "OnClarity"];
            const chartData3 = {
                labels: labels3,
                datasets: [
                    {
                        data: [vm.model.O54, vm.model.P54, vm.model.Q54],
                        backgroundColor: ["#023970", "#FDB713", "#D15421"],
                    }
                ]
            };

            const chartConfig3 = {
                type: 'bar',
                data: chartData3,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    locale: 'pt-BR',
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                // Include a dollar sign in the ticks
                                callback: function (value, index, ticks) {
                                    return value.toLocaleString('pt-BR', { style: 'currency', currency: "BRL", minimumFractionDigits: 0, });
                                }
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Gastos com tratamentos de falsos negativos em 5 anos'
                        },
                        legend: {
                            display: false
                        },
                        tooltip: {
                            mode: 'x',
                            callbacks: {
                                label: function (context) {
                                    let label = context.dataset.label || '';

                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed.y !== null) {
                                        label += new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0, }).format(context.parsed.y);
                                    }
                                    return label;
                                }
                            }
                        },
                    }
                },
            };

            myChart3 = new Chart(ctx3, chartConfig3);
        }

        initializaChart4 = () => {
            const ctx4 = document.getElementById('myChart4').getContext('2d');
            const labels4 = ["Cit convencional", "Cit meio liquido", "OnClarity"];
            const chartData4 = {
                labels: labels4,
                datasets: [
                    {
                        data: [vm.model.L58, vm.model.M58, vm.model.N58],
                        backgroundColor: ["#023970", "#FDB713", "#D15421"],
                    }
                ]
            };

            const chartConfig4 = {
                type: 'bar',
                data: chartData4,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    locale: 'pt-BR',
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                // Include a dollar sign in the ticks
                                callback: function (value, index, ticks) {
                                    return value.toLocaleString('pt-BR', { style: 'currency', currency: "BRL", minimumFractionDigits: 0, });
                                }
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Total de custos em 5 anos'
                        },
                        legend: {
                            display: false
                        },
                        tooltip: {
                            mode: 'x',
                            callbacks: {
                                label: function (context) {
                                    let label = context.dataset.label || '';

                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed.y !== null) {
                                        label += new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0, }).format(context.parsed.y);
                                    }
                                    return label;
                                }
                            }
                        },
                    }
                },
            };

            myChart4 = new Chart(ctx4, chartConfig4);
        }

        vm.populateExames = () => {
            vm.exames = [];
            vm.add_exames(1, "0-12", 0);
            vm.add_exames(2, "13-24", 1);
            vm.add_exames(3, "25-36", 2);
            vm.add_exames(4, "37-48", 3);
            vm.add_exames(5, "49-60", 4);

        }

        vm.populateNiCa = () => {
            vm.nic_ca = [];
            vm.add_nic_ca(1, "0-12", 0, 15000, 0.00000, 0.00000, 0.00000, 0.00000, 0.00000, 0.00000, 0.12000, 0.00110, 0.39681, 0.02279, 0.03300, 0.00130, 0.18800, 0.01080, 0.15400, 0.00885);
            vm.add_nic_ca(2, "13-24", 1, 15000, 0.00027, 0.00003, 0.00161, 0.00009, 0.00055, 0.00005, 0.15000, 0.00150, 0.44013, 0.02382, 0.05500, 0.00170, 0.23540, 0.01274, 0.18080, 0.00978);
            vm.add_nic_ca(3, "25-36", 2, 15000, 0.00085, 0.00005, 0.00311, 0.00015, 0.00122, 0.00008, 0.16000, 0.00170, 0.44991, 0.02420, 0.06650, 0.00190, 0.28280, 0.01521, 0.20760, 0.01117);
            vm.add_nic_ca(4, "37-48", 3, 15000, 0.00143, 0.00007, 0.00460, 0.00020, 0.00189, 0.00011, 0.17000, 0.00190, 0.45969, 0.02459, 0.07800, 0.00210, 0.33020, 0.01766, 0.23440, 0.01254);
            vm.add_nic_ca(5, "49-60", 4, 15000, 0.00235, 0.00011, 0.00610, 0.00026, 0.00286, 0.00014, 0.18000, 0.00200, 0.46514, 0.02497, 0.08700, 0.00225, 0.37760, 0.02027, 0.26120, 0.01402);
            vm.add_nic_ca(6, "61-72", 5, 15000, 0.00326, 0.00014, 0.00759, 0.00031, 0.00383, 0.00017, 0.19000, 0.00210, 0.47060, 0.02536, 0.09600, 0.00240, 0.42500, 0.02290, 0.28800, 0.01552);

        }

        vm.$onInit = function () {

            vm.populateNiCa();
            vm.populateExames();


            const accepted = sessionStorage.getItem("accepted");

            if (!accepted || accepted === undefined || accepted === null) {
                var myModal = new bootstrap.Modal(document.getElementById('myModal'), { backdrop: 'static', focus: true, keyboard: false })
                myModal.show();
            }
            const clone = { ...vm.model };


            initializaChart1();
            initializaChart2();
            initializaChart3();
            initializaChart4();
            //this.generateChartData();
            //myChart1.update();


        }

    }]);

myApp.directive('format', ['$filter', function ($filter) {
    return {
        require: '?ngModel',
        scope: {
            digits: '=?'
        },
        link: function (scope, elem, attrs, ctrl) {
            if (!ctrl) return;

            var format = {
                prefix: '',
                centsSeparator: ',',
                thousandsSeparator: '.',
                centsLimit: scope.digits ?? 2
            };

            ctrl.$parsers.unshift(function (value) {
                //elem.priceFormat(format);
                //console.log('parsers', elem[0].value, value, ctrl.$viewValue);
                return Number(ctrl.$viewValue.replace(/[.,\s]/g, '')) / Math.pow(10, format.centsLimit);
            });

            ctrl.$formatters.unshift(function (value) {
                elem[0].value = parseFloat((ctrl.$modelValue * Math.pow(10, format.centsLimit)).toFixed(format.centsLimit));
                elem.priceFormat(format);
                return elem[0].value;
            })
        }
    };
}]);

(function ($) {
    $.fn.priceFormat = function (options) {
        var defaults = {
            prefix: 'US$ ',
            suffix: '',
            centsSeparator: '.',
            thousandsSeparator: ',',
            limit: false,
            centsLimit: 2,
            clearPrefix: false,
            clearSufix: false,
            allowNegative: false,
            insertPlusSign: false
        };
        var options = $.extend(defaults, options);
        return this.each(function () {
            var obj = $(this);
            var is_number = /[0-9]/;
            var prefix = options.prefix;
            var suffix = options.suffix;
            var centsSeparator = options.centsSeparator;
            var thousandsSeparator = options.thousandsSeparator;
            var limit = options.limit;
            var centsLimit = options.centsLimit;
            var clearPrefix = options.clearPrefix;
            var clearSuffix = options.clearSuffix;
            var allowNegative = options.allowNegative;
            var insertPlusSign = options.insertPlusSign;
            if (insertPlusSign) allowNegative = true;

            function to_numbers(str) {
                var formatted = '';
                for (var i = 0; i < (str.length); i++) {
                    char_ = str.charAt(i);
                    if (formatted.length == 0 && char_ == 0) char_ = false;
                    if (char_ && char_.match(is_number)) {
                        if (limit) {
                            if (formatted.length < limit) formatted = formatted + char_
                        } else {
                            formatted = formatted + char_
                        }
                    }
                }
                return formatted
            }
            function fill_with_zeroes(str) {
                while (str.length < (centsLimit + 1)) str = '0' + str;
                return str
            }
            function price_format(str) {
                var formatted = fill_with_zeroes(to_numbers(str));
                var thousandsFormatted = '';
                var thousandsCount = 0;
                if (centsLimit == 0) {
                    centsSeparator = "";
                    centsVal = ""
                }
                var centsVal = formatted.substr(formatted.length - centsLimit, centsLimit);
                var integerVal = formatted.substr(0, formatted.length - centsLimit);
                formatted = (centsLimit == 0) ? integerVal : integerVal + centsSeparator + centsVal;
                if (thousandsSeparator || $.trim(thousandsSeparator) != "") {
                    for (var j = integerVal.length; j > 0; j--) {
                        char_ = integerVal.substr(j - 1, 1);
                        thousandsCount++;
                        if (thousandsCount % 3 == 0) char_ = thousandsSeparator + char_;
                        thousandsFormatted = char_ + thousandsFormatted
                    }
                    if (thousandsFormatted.substr(0, 1) == thousandsSeparator) thousandsFormatted = thousandsFormatted.substring(1, thousandsFormatted.length);
                    formatted = (centsLimit == 0) ? thousandsFormatted : thousandsFormatted + centsSeparator + centsVal
                }
                if (allowNegative && (integerVal != 0 || centsVal != 0)) {
                    if (str.indexOf('-') != -1 && str.indexOf('+') < str.indexOf('-')) {
                        formatted = '-' + formatted
                    } else {
                        if (!insertPlusSign) formatted = '' + formatted;
                        else formatted = '+' + formatted
                    }
                }
                if (prefix) formatted = prefix + formatted;
                if (suffix) formatted = formatted + suffix;
                return formatted
            }
            function key_check(e) {
                var code = (e.keyCode ? e.keyCode : e.which);
                var typed = String.fromCharCode(code);
                var functional = false;
                var str = obj.val();
                var newValue = price_format(str + typed);
                if ((code >= 48 && code <= 57) || (code >= 96 && code <= 105)) functional = true;
                if (code == 8) functional = true;
                if (code == 9) functional = true;
                if (code == 13) functional = true;
                if (code == 46) functional = true;
                if (code == 37) functional = true;
                if (code == 39) functional = true;
                if (allowNegative && (code == 189 || code == 109)) functional = true;
                if (insertPlusSign && (code == 187 || code == 107)) functional = true;
                if (!functional) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (str != newValue) obj.val(newValue)
                }
            }
            function price_it() {
                var str = obj.val();
                var price = price_format(str);
                if (str != price) obj.val(price)
            }
            function add_prefix() {
                var val = obj.val();
                obj.val(prefix + val)
            }
            function add_suffix() {
                var val = obj.val();
                obj.val(val + suffix)
            }
            function clear_prefix() {
                if ($.trim(prefix) != '' && clearPrefix) {
                    var array = obj.val().split(prefix);
                    obj.val(array[1])
                }
            }
            function clear_suffix() {
                if ($.trim(suffix) != '' && clearSuffix) {
                    var array = obj.val().split(suffix);
                    obj.val(array[0])
                }
            }
            $(this).bind('keydown.price_format', key_check);
            $(this).bind('keyup.price_format', price_it);
            $(this).bind('focusout.price_format', price_it);
            if (clearPrefix) {
                $(this).bind('focusout.price_format', function () {
                    clear_prefix()
                });
                $(this).bind('focusin.price_format', function () {
                    add_prefix()
                })
            }
            if (clearSuffix) {
                $(this).bind('focusout.price_format', function () {
                    clear_suffix()
                });
                $(this).bind('focusin.price_format', function () {
                    add_suffix()
                })
            }
            if ($(this).val().length > 0) {
                price_it();
                clear_prefix();
                clear_suffix()
            }
        })
    };
    $.fn.unpriceFormat = function () {
        return $(this).unbind(".price_format")
    };
    $.fn.unmask = function () {
        var field = $(this).val();
        var result = "";
        for (var f in field) {
            if (!isNaN(field[f]) || field[f] == "-") result += field[f]
        }
        return result
    }
})(jQuery);