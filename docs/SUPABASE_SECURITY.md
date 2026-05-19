# Recomendações de Segurança - Supabase RLS

Como o projeto utiliza chaves públicas no frontend, é **obrigatório** configurar o **Row Level Security (RLS)** no painel do Supabase para proteger seus dados.

## 1. Habilitar RLS
Na tabela `produtos`, clique em **"Enable RLS"**.

## 2. Criar Políticas (Policies)

### A. Acesso Público (Leitura)
Permite que qualquer pessoa veja os produtos no site.
- **Nome:** `Allow public read access`
- **Operação:** `SELECT`
- **Target roles:** `public`
- **Using expression:** `true`

### B. Acesso Administrativo (Escrita)
Permite apenas usuários autenticados (você) criarem, editarem ou deletarem.
- **Nome:** `Allow authenticated CRUD`
- **Operação:** `ALL` (INSERT, UPDATE, DELETE)
- **Target roles:** `authenticated`
- **Using expression:** `(auth.role() = 'authenticated')`

---
**Nota:** Sem essas políticas, qualquer pessoa com conhecimento técnico básico poderia deletar seus produtos usando a chave pública encontrada no código JavaScript.
