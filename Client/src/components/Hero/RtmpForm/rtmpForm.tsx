import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes'
import { memo, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { changeUserRtmpState } from '../../../app/rtmpSlice'

const rtmpForm = memo(() => {
    const streamOn = useSelector((state: any) => state.stream.value);
    const isRtmp=useSelector((state:any)=>state.rtmp.value);
    const dispatch = useDispatch();
    const [platform,setPlatform] = useState('YouTube');
    const [rtmpUrl,setRtmpUrl] = useState('rtmp://a.rtmp.youtube.com/live2/');
    const [rtmpKey,setRtmpKey] = useState('');

    const handleRtmpSubmit = ()=>{
        if(!rtmpKey || !rtmpUrl) alert("Please Provide RTMP Key and URL of your youtube chanel")
        dispatch(changeUserRtmpState(rtmpKey && rtmpUrl?JSON.stringify({'platform':platform,'rtmpUrl':rtmpUrl,'rtmpKey':rtmpKey}):''));
    }
    return (
        <div>
            <Dialog.Root>
                <Dialog.Trigger>
                    <Button my='4' size='4' variant={streamOn ? 'surface' : 'solid'} style={{ cursor: 'pointer' }}>
                        {isRtmp?"Change Platform":"Join Today"}
                    </Button>
                </Dialog.Trigger>

                <Dialog.Content maxWidth="450px">
                    <Dialog.Title>Add Platform</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                    To start your stream, please provide the following details.
                    </Dialog.Description>

                    <Flex direction="column" gap="3">
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Platform
                            </Text>
                            <TextField.Root
                                onChange={(e)=>setPlatform(e.target.value)}
                                defaultValue="YouTube"
                                placeholder="Enter your Streaming Platform"
                            />
                        </label>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                RTMP Url
                            </Text>
                            <TextField.Root
                                required
                                onChange={(e)=>setRtmpUrl(e.target.value)}
                                defaultValue="rtmp://a.rtmp.youtube.com/live2/"
                                placeholder="Enter your Streaming RTMP url"
                            />
                        </label>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                RTMP Secrect Key
                            </Text>
                            <TextField.Root
                                onChange={(e)=>setRtmpKey(e.target.value)}
                                required
                                defaultValue="This field is must..."
                                placeholder="Enter your email"
                            />
                        </label>
                    </Flex>
                    <Flex gap="3" mt="4" justify="end">
                        <Dialog.Close>
                            <Button variant="soft" color="gray">
                                Cancel
                            </Button>
                        </Dialog.Close>
                        <Dialog.Close>
                            <Button onClick={handleRtmpSubmit}>Save</Button>
                        </Dialog.Close>
                    </Flex>
                </Dialog.Content>
            </Dialog.Root>
        </div>
    )
})

export default rtmpForm