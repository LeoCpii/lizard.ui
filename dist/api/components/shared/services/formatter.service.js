export class Formatter {
    leadingZerosValue(value, length) {
        const unformattedValue = value.toString().replace(/\D/g, '');
        return `${'0'.repeat(length)}${unformattedValue}`.slice(-length);
    }
    fn(config, value) {
        const leadingZerosValue = this.leadingZerosValue(value, config.length);
        const maskedValue = leadingZerosValue.replace(config.regex, config.mask);
        return { value: maskedValue, length: config.example.length };
    }
    /**
     * Fomatter CEP.
     * @param {string | number} value - cep Ex: 00000000
     * @return {string} Ex: 00000-000
    */
    cep(value) {
        const config = Formatter.config.cep;
        return this.fn(config, value);
    }
    /**
     * Fomatter CPF.
     * @param {string | number} value - cep Ex: 000000000000
     * @return {string} Ex: 000.000.000-00
    */
    cpf(value) {
        const config = Formatter.config.cpf;
        return this.fn(config, value);
    }
    /**
     * Fomatter CNPJ.
     * @param {string | number} value - cep Ex: 00000000000000
     * @return {string} Ex: 00.000.000/0000-00
    */
    cnpj(value) {
        const config = Formatter.config.cnpj;
        return this.fn(config, value);
    }
    /**
     * Fomatter Cel with DDD.
     * @param {string | number} value - cep Ex: 00000000000
     * @return {string} Ex: (00) 00000-0000
    */
    cellWithDDD(value) {
        const config = Formatter.config.celWithDDD;
        return this.fn(config, value);
    }
    /**
     * cell.
     * @param {string | number} value - cep Ex: 000000000
     * @return {string} Ex: 00000-0000
    */
    cell(value) {
        const config = Formatter.config.cel;
        return this.fn(config, value);
    }
    /**
     * Dynamically format the value.
     * @param {string | number} value
     * @param {IConfig} config
     * @example <caption>Dynamically format.</caption>
     * const formatter = new Formatter();

       const config = {
           length: 8,
           regex: /^(\d{5})(\d{3})$/,
           mask: '$1-$2'
       }

       formatter.generic(99999999, config);
     * @returns {String} Return value format -> 99999-999.
     */
    generic(value, config) {
        return this.fn(config, value);
    }
}
Formatter.config = {
    cep: {
        length: 8,
        regex: /^(\d{5})(\d{3})$/,
        mask: '$1-$2',
        example: '00000-000'
    },
    cpf: {
        length: 11,
        regex: /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
        mask: '$1.$2.$3-$4',
        example: '000.000.000-00'
    },
    cnpj: {
        length: 14,
        regex: /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
        mask: '$1.$2.$3/$4-$5',
        example: '00.000.000/0000-00'
    },
    cel: {
        length: 9,
        regex: /^(\d{5})(\d{4})$/,
        mask: '$1-$2',
        example: '00000-0000'
    },
    celWithDDD: {
        length: 11,
        regex: /^(\d{2})(\d{5})(\d{4})$/,
        mask: '($1) $2-$3',
        example: '(00) 00000-0000'
    }
};
//# sourceMappingURL=formatter.service.js.map