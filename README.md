# Restore Supabase

Este projeto é um aplicativo fullstack com Supabase, que tem como objetivo restaurar um banco de dados Supabase a partir de um backup.

## Requisitos

- Node.js
- Supabase CLI
- Conta no Supabase

## Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/seu-usuario/restore-supabase.git
   cd restore-supabase
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

## Uso

1. Configure as variáveis de ambiente no arquivo `.env`:

   ```env
   SUPABASE_URL=your-supabase-url
   SUPABASE_KEY=your-supabase-key
   BACKUP_FILE_PATH=path-to-your-backup-file
   ```

2. Execute o script de restauração:
   ```sh
   npm run restore
   ```

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
