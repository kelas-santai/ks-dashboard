# Tahap build
FROM node:24-alpine AS builder

# Atur direktori kerja
WORKDIR /app

# Salin dependency file
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin semua file ke image
COPY . .

# Build aplikasi Next.js
RUN npm run build

# Tahap produksi
FROM node:24-alpine AS runner

WORKDIR /app

# Hanya salin file yang dibutuhkan untuk production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Default port
EXPOSE 3000

# Jalankan server Next.js
CMD ["npm", "start"]
