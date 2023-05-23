// declare module '*.md';
// export * from '@assets/md/boardDetail.md';

declare module '*.md' {
    const MarkDown: string;
    export default MarkDown;
}