<template>
    <div class="list-card">
        <div class="header">
            <div class="title">{{ title }}</div>
            <slot name="header-right" />
        </div>
        <slot>
            <div class="empty">{{ slotEmpty }}</div>
        </slot>
    </div>
</template>

<script setup lang="ts">
interface Props {
    title: string
    slotEmpty?: string
}
defineProps<Props>()
</script>
<style lang="scss" scoped>
.list-card {
    padding: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.349019607843137);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 80px;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title {
            color: #555555;
            font-size: 10px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 5px;

            &::before {
                content: '';
                display: block;
                width: 10px;
                height: 10px;
                background: #555555;
                border-radius: 10px;
            }
        }
    }

    .empty {
        font-size: 24px;
        color: #5d7fff;
        text-align: center;
    }
}
</style>