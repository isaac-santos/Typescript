/*
  Resumidamente os módulos em JavaScript ou Typescript é uma forma de você compartilhar informações entre arquivos, dessa forma, todos os arquivos que realizarem a importação desse módulo poderão utilizar e usufruir de suas funções ou informações que foram expostas.

  import = Importa informações de uma class, namespace, const, let, etc.
  export = Exporta para outras pessoas consumirem informações.
*/

import { Pessoa } from "./pessoa-1";

export { Pessoa };